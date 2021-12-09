const fs = require("fs");
const express = require("express");
const app = express();

const urlencodedParser = express.urlencoded({extended: false});

app.get("/api/getSimpleFile", function(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.sendFile(__dirname + "\\files\\" + 'data.txt');
});

app.get("/api/getJsonFile", function(request, response){
    fs.readFile("files/data.json", "utf-8", function(error,data){
        if (error) {
            throw err;
        }
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Content-Type', 'application/json');
        response.json(data);
    });

});

app.post("/api/setData", urlencodedParser, function (request, response){
    if(!request.body) {
        return response.sendStatus(400);
    }

    fs.writeFile("files/data.json", JSON.stringify(request.body), function(error){
        if(error) throw error; console.log(error);
    });

    let str = '';
    str += request.body.Email + '\n' + request.body.Password + '\n' + request.body.Country + '\n' + request.body.City + '\n' + request.body.HomeAdress + '\n' + request.body.Index + '\n' 
        + request.body.noIndex + '\n' + request.body.Gender + '\n';

    fs.writeFile("files/data.txt", str, function(error){
        if(error) throw error; console.log(error);
    });

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Успешно добавлено!');
});

app.listen(3000, function() {
    console.log("Server starts");
});