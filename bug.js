const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is a common mistake that causes issues with asynchronous operations.
  res.send('Hello World!');
  someAsyncOperation().then(() => {
    // This code will run after the response has been sent.
    console.log('Asynchronous operation completed.');
  });
});

function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}