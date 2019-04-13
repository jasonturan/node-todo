const AWS = require("aws-sdk");
const {assoc, map, concat, forEach} = require('ramda');
const {rowTodoMapper, todoRowMapper} = require('../structFactories');

AWS.config.update({
  region: "us-west-2",
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  endpoint: "http://localhost:8000"
});



const scanForTodos = async (docClient, params) =>{
  const response = await docClient.scan(params).promise();
  const todos =map(rowTodoMapper , response.Items);
  if (response.LastEvaluatedKey){
    const childTodos = await scanForTodos(
      docClient,
      assoc('ExclusiveStartKey',response.LastEvaluatedKey, params));
    return concat(todos, childTodos);
  }else{
    return todos;
  }
};

const getAllTodos = async () =>{
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "Todos"
  };
  return scanForTodos(docClient, params);
}

const createOrUpdateTodos = async (todos) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const requests = map(todo => {
    const item = todoRowMapper(todo);
    const params = {
      TableName: "Todos",
      Item: item
    };
    const response = docClient.put(params).promise();
    return response;
    }, todos );
  return await Promise.all(requests);
}

export const GetAllTodos =getAllTodos;
export const CreateOrUpdateTodos = createOrUpdateTodos;

