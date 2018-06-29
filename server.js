const path = require("path");

const express = require("express");
const app = express();

const signRouter = require("./routers/sign");

app.use('/views', express.static(__dirname + '/views'));
app.set("views", path.join(__dirname, "views"))
   .set("view engine", "ejs")
   .use("/sign",signRouter)
   .listen(3000, "localhost");