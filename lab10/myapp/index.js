'use strict';

const fs = require('fs');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to COFFEE HOUSE COMPANY ");
        res.write(' Welcome to COFFEE HOUSE COMPANY');
        res.end();
    
    }
    else if (url === '/contact') {
        console.log("welcome to our app ");
        res.write(' Welcome to COFFEE HOUSE COMPANY');
        res.end();
    } 
    else {
      //  res.writeHead(200);
        res.write('Server loaded.');
        res.end();

    }
}).listen(3001, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//
let managers = {
    "managers":[
        {
            "name": "Akshaya",
            "email": "akshayagmail.com",
            "phone": "9148827639",
            "role": "Executive",
            "performance": 0.92,
            "salary": 20000
        },
        {
            "name": "Pavan",
            "email": "pavan@gmail.com",
            "phone": "9100997798",
            "role": "Intern",
            "performance": 0.65,
            "salary": 12000
        },
        {
            "name": "Ashwin",
            "email": "ashwin@gmail.com",
            "phone": "9800657341",
            "role": "Executive",
            "performance": 0.78,
            "salary": 23000
        },
        {
            "name": "Vaishnavi",
            "email": "vaishnavi@gmail.com",
            "phone": "8935667832",
            "role": "HR",
            "performance": 0.91,
            "salary": 21300
        },
        {
            "name": "Pooja",
            "email": "pooja@gmail.com",
            "phone": "91009902",
            "role": "Intern",
            "performance": 0.87,
            "salary": 12000
        },
        {
            "name": "Anisha",
            "email": "anisha@gmail.com",
            "phone": "9167990012",
            "role": "Intern",
            "performance": 0.78,
            "salary": 10000
        }
]

};

let data = JSON.stringify(managers);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let man = JSON.parse(data);
    console.log(man);

});