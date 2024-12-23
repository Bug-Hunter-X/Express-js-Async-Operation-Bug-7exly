const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
    console.log('Asynchronous operation completed.');
  } catch (error) {
    console.error('Error during asynchronous operation:', error);
    res.status(500).send('Internal Server Error');
  }
});

function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
