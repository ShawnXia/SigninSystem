const express = require("express");
const router = express.Router();
const mongodb = require("./logic/mongodb");


router.get("/:name", function(req, res){
    res.cookie('username', req.params.name)
    res.render("sign",{
        name: req.params.name,
        id: req.query.id
    });
})

router.post("/save",async function(req, res){
    console.log(req.body);
    let result = await mongodb.insertMongodb('images',req.body);
    
    if(result.result.ok == 1){
        console.log(true);
        res.send({insertSuccess:true});
    }else{
        console.log(false);
         res.status(500);
         res.send({insertSuccess:false})
     }
    
})

router.get("/view/:name",async function(req, res){
    let result = await mongodb.findMongodbLastRecord('images',{userId:req.params.name});
    console.log(result);
    res.render("view",result);
})
module.exports = router;