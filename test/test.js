// A minimal "test" that exits 0 if server starts successfully.
const http = require('http');
const server = require('../app');

http.get('http://localhost:3000', res => {
  console.log('Test passed! Status:', res.statusCode);
  process.exit(0);
}).on('error', err => {
  console.error('Test failed!', err.message);
  process.exit(1);
});
