const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const signRouter = require("./routers/sign");
const listRouter = require("./routers/list");

app.use('/views', express.static(__dirname + '/views'));
app.set("views", path.join(__dirname, "views"))
   .set("view engine", "ejs")
   .use("/list",listRouter)
   .use("/sign",signRouter)
   .listen(3000, "");