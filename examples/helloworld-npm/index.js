const express = require('express');
const {toHtml} = require("createmeal/index");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;

let helloWorld = {
    "!DOCTYPE html": "",
    html: {
      head: [{
        title: "Hello World NPM"
      }],
      body: [{
        div: [{
            class: "container"
          },
          {
            h3: ["Hello World!"]
          },
          {
            p: ["This is a pre-rendered file."]
          }
        ]
      }]
    }
  }
let html = toHtml(helloWorld);
fs.writeFileSync(path.resolve("public/index.html"),html);

app.use("/",express.static(__dirname + '/public'));
app.get('/dynamic', function(req, res){
    helloWorld.html.body.push({
        script: ["document.querySelector('h3').innerHTML = 'Hello from Express!'; setInterval(()=>document.querySelector('p').innerHTML=new Date().toLocaleTimeString(),1000);"]
    });
    let html = toHtml(helloWorld);
    res.send(html);
})
app.get('/staticjs', function(req, res){
    helloWorld.html.body.push({
        script: {
            src: "index.js"
        }
    });
    let html = toHtml(helloWorld);
    res.send(html);
})

app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})
