"use strict"

module.exports.insertMongodb = async function(collection,payload){

    try{
        const mongodb_connector = require('./mongodb_connector');
        const client = await mongodb_connector();
        const db = client.db('shawn');
        const cursor = await db.collection(collection).insert(payload);
        
//        if (await cursor.hasNext()) {
//        
//            const item = await cursor.next();
//            
//            console.log(item);
//        
//        }
        client.close();
        return cursor;
    }catch(e){
        console.log(e);
    }
}

module.exports.findMongodbLastRecord = async function(collection,payload){

    try{
        const mongodb_connector = require('./mongodb_connector');
        const client = await mongodb_connector();
        const db = client.db('shawn');
        const cursor = await db.collection(collection).find(payload).sort({_id:-1}).limit(1);
        let item;
        if (await cursor.hasNext()) {

            item = await cursor.next();

            console.log(item);

        }
        client.close();
        return item;
    }catch(e){
        console.log(e);
    }
}

module.exports.findMongodbAll = async function(collection,payload){

    try{
        const mongodb_connector = require('./mongodb_connector');
        const client = await mongodb_connector();
        const db = client.db('shawn');
        const items = await db.collection(collection).find(payload).toArray();
        client.close();
        return items;
    }catch(e){
        console.log(e);
    }
}