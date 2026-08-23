const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index")
})

router.post("/projetos", (req, res)=>{
    res.render("pages/projetos")
})

router.post("/solicitar", (req, res)=>{
    res.render("pages/solicitar")
})


module.exports = router;