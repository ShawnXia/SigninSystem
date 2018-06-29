const path = require("path");

const express = require("express");
const app = express();

const signRouter = require("./routers/sign");
const listRouter = require("./routers/list");

app.use('/views', express.static(__dirname + '/views'));
app.set("views", path.join(__dirname, "views"))
   .set("view engine", "ejs")
   .use("/",listRouter)
   .use("/sign",signRouter)
   .listen(3000, "");