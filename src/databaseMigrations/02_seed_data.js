const AWS = require("aws-sdk");
const uuidv1 = require("uuid/v1");
const {map, range,pipe} = require('ramda');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey'
});

var docClient = new AWS.DynamoDB.DocumentClient();
const createTodo = (title, completed) => ({id: uuidv1(), title: title, completed: completed});

var todos =
  map((index) => createTodo('TODO ' +index, false), range(0, 20));

map(function(todo) {
  var params = {
    TableName: "Todos",
    Item: {
      "id": todo.id,
      "info":  {
        title: todo.title,
        completed: todo.completed
      }
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to add movie", todo.title, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", todo.title);
    }
  })
}, todos);