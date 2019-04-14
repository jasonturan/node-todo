const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  endpoint: 'http://localhost:8000'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Todos',
  KeySchema: [
    {AttributeName: 'id', KeyType: 'HASH'} //Partition key
  ],
  AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, error => {
  if (error) {
    throw new Error(
      'Unable to create table. Error JSON:' + JSON.stringify(error, null, 2)
    );
  }
});
