const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

console.log("Database Info")
console.log("DB NAME" + process.env.DB_NAME)
console.log("Host:" + process.env.DB_HOST)

var db_info = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
}
console.log("Database Info", db_info)

// DB connect
const con = mysql.createConnection(db_info);
con.connect((error) => {
    // if have error
    // if(error) throw error;
    // console.log("DB Connect!!!")
    if (error) {
        console.log('DB Error!')
    } else {
        console.log('DB Connect!')
    }
})
con.end();