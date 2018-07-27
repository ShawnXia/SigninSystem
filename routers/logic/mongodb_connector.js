"use strict";

var MongoClient = require('mongodb').MongoClient;
const mongodb_connector = function (){

    return new Promise(function (resolve,reject) {

          // Set up the connection to the local db

        // Open the connection to the server
        MongoClient.connect("mongodb://shawn:shawn@13.54.232.11:27017/shawn", {useNewUrlParser: true,native_parser: true,validateOptions: true},function(err, client) {
            resolve(client);

        });

    });
}
module.exports = mongodb_connector;