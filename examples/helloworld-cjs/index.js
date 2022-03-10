const express = require("express");
const createmeal = require("../../dist/createmeal-legacy-node").createmeal;

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
let html = createmeal.toHtml(helloWorld);
fs.writeFileSync(path.resolve("public/index.html"),html);

app.use("/",express.static(path.join(__dirname, '/public')));
app.get('/dynamic', function(req, res){
    helloWorld.html.body.push({
        script: ["document.querySelector('h3').innerHTML = 'Hello from Express!'; setInterval(()=>document.querySelector('p').innerHTML=new Date().toLocaleTimeString(),1000);"]
    });
    let html = createmeal.toHtml(helloWorld);
    res.send(html);
})
app.get('/staticjs', function(req, res){
    helloWorld.html.body.push({
        script: {
            src: "index.js"
        }
    });
    let html = createmeal.toHtml(helloWorld);
    res.send(html);
})

app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})
