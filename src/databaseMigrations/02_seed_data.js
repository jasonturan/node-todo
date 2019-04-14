const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');
const {map, range} = require('ramda');

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey'
});

const documentClient = new AWS.DynamoDB.DocumentClient();
const createTodo = (title, completed) => ({
  id: uuidv1(),
  title,
  completed
});

const todos = map(index => createTodo('TODO ' + index, false), range(0, 20));

map(todo => {
  const params = {
    TableName: 'Todos',
    Item: {
      id: todo.id,
      info: {
        title: todo.title,
        completed: todo.completed
      }
    }
  };
  documentClient.put(params);
}, todos);
