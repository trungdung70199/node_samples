// const dotenv = require('dotenv');
const fs = require('fs');
const dotenv = require('dotenv');
const { create } = require('./message');

// read .env
dotenv.config();

// take name and number from .env
const name = process.env.NAME;
const number = process.env.NUMBER;

// message
const message = create(name, number);

// result
fs.writeFileSync('result.txt', message);

console.log('result.txt に結果を書き込みました。');
