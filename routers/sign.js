const express = require("express");
const router = express.Router();


router.get("/:name", function(req, res){
    res.render("sign",{
        name: req.params.name,
        id: req.query.id
    });
})

module.exports = router;