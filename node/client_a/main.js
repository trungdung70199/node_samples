const fs = require('fs');
const dotenv = require('dotenv')

dotenv.config()
const message = require('./message')

// .env
const NAME = process.env.NAME
const NUMBER = process.env.NUMBER

// messageのcreate() 
const result = message.create(NAME, NUMBER)
console.log(result)

fs.writeFile('result.txt', result, (err) => {
  if (err) {
    console.error('Error...', err);
    return;
  }
  console.log('Success!');
});