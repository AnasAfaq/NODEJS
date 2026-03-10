const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!, This is HomePage');
})

app.get('/chai', (req, res) => {
  res.send('Hello Friends -- Chai pee lo!!!!');
})

app.get('/coffee', (req, res) => {
  res.send('Hello Friends....COFFEE !!!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})