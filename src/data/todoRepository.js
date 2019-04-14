const AWS = require('aws-sdk');
const {assoc, map, concat} = require('ramda');
const {rowTodoMapper, todoRowMapper} = require('../structFactories');

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  endpoint: 'http://localhost:8000'
});

const scanForTodos = async (documentClient, params) => {
  const response = await documentClient.scan(params).promise();
  const todos = map(rowTodoMapper, response.Items);
  if (response.LastEvaluatedKey) {
    const childTodos = await scanForTodos(
      documentClient,
      assoc('ExclusiveStartKey', response.LastEvaluatedKey, params)
    );
    return concat(todos, childTodos);
  } else {
    return todos;
  }
};

const getAllTodos = async () => {
  const documentClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'Todos'
  };
  return scanForTodos(documentClient, params);
};

const createOrUpdateTodos = async todos => {
  const documentClient = new AWS.DynamoDB.DocumentClient();
  const requests = map(todo => {
    const item = todoRowMapper(todo);
    const params = {
      TableName: 'Todos',
      Item: item
    };
    return documentClient.put(params).promise();
  }, todos);
  return await Promise.all(requests);
};

export const GetAllTodos = getAllTodos;
export const CreateOrUpdateTodos = createOrUpdateTodos;
