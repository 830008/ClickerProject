// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const Datastore = require("nedb");
const Database = new Datastore("database.db")
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json());
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

Database.loadDatabase();

app.post("/api",( request, response) => {
  console.log(request.body);
  Database.insert({ email: request.body.email, cookiecount: request.body.cookiecount})
});



app.post("/api1",(request, response) => {
  console.log(request.body);
  var loademail = (request.body.email)
  var loadcookies = (request.body.newcookiecount)





  Database.find({ email: loademail, cookiecount: loadcookies}, (_, dbResponse) => {
    response.json( dbResponse )
    console.log(dbResponse);
  })






});












const listener = app.listen(80);