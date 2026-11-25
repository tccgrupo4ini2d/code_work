const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index")
})

router.get("/cadastro-freelancer", (req, res)=>{
    res.render("pages/cadastro_freelancer")
})

router.get("/cadastro-contratante", (req, res)=>{
    res.render("pages/cadastro_contratante")
})

router.get("/home-c", (req, res)=>{
    res.render("pages/contratante_home")
})

router.get("/home-f", (req, res)=>{
    res.render("pages/freela_home")
})

router.get("/habilidades1", (req, res)=>{
    res.render("pages/habilidades1f")
})

router.get("/habilidades2", (req, res)=>{
    res.render("pages/habilidades2f")
})

router.get("/preferencias1", (req, res)=>{
    res.render("pages/preferencias1")
})

router.get("/preferencias2", (req, res)=>{
    res.render("pages/preferencias2c")
})

router.get("/menu", (req, res)=>{
    res.render("pages/menu")
})

router.get("/entrar", (req, res)=>{
    res.render("pages/entrarlogin")
})

router.get("/perfil-f", (req, res)=>{
    res.render("pages/perfil_freela")
})

router.get("/perfil-c", (req, res)=>{
    res.render("pages/perfil_contra")
})

router.get("/entrarfc", (req, res)=>{
    res.render("pages/loginouentrar")
})

module.exports = router;