const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index")
})

router.get("/cadastrofreela", (req, res)=>{
    res.render("pages/projetos")
})

router.get("/cadastroc", (req, res)=>{
    res.render("pages/solicitar")
})


module.exports = router;