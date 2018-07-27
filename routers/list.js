const express = require("express");
const router = express.Router();
const mongodb = require("./logic/mongodb");

router.get("/",async function(req, res){
    res.render("list");
})

router.get("/listAll",async function(req, res){
    let list = await mongodb.findMongodbAll('user',{});
    console.log(list);
    res.send(list);
})

router.post("/insert",async function(req, res){
    const payload = {
        FirstName : "Shawn",
        MiddleName : null,
        LastName : "Xia",
        RegisterTime : new Date(),
        DateOfBirth : new Date(2010,5,20),
        Gender : "Boy",
        Country : "NZ",
        City : "Auckland",
        Suburb : "North Cote",
        Address : "10 Glen Eden Road",
        PostCode : 1052,
        CompanyID: 2315,
        isActive: true,
        isDeleted: false
    }
    let result = await mongodb.insertMongodb('user',payload);
    
    if(result.result.ok == 1){
        console.log(true);
        res.send({insertSuccess:true});
    }else{
        console.log(false);
         res.status(500);
         res.send({insertSuccess:false})
     }
    
})


module.exports = router;