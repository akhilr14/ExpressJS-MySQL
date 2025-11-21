const express =require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, ()=>{
    console.log("Server Started");
});

const db =mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database: 'db'
});

db.connect((err) => {
    if(err){
        console.log("Not Connected\n" + err);
    }
    else{
        console.log("Connected DB");
    }
    
})
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("db", "root", "",{
//   host: "localhost",
//   dialect: "mysql",
//   logging: false,  // disable logging; default: console.log
// });

// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection to MySQL has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// testConnection();