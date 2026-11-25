const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get("/", (req, res)=>{
    res.render("pages/index")
})

router.get("/cadastro-freelancer", (req, res)=>{
     res.render("pages/cadastro_freelancer",{resultado:null,erros:null, valores:{}});
})

router.get("/cadastro-contratante", (req, res)=>{
    res.render("pages/cadastro_contratante",{resultado:null,erros:null, valores:{}});
})

router.post("/cadastro-contratante",
    body("email").isEmail().notEmpty()
    .withMessage("Coloque um email valido!"),
   body("completo")
    .notEmpty()
    .withMessage("O nome é obrigatório")
    .isLength({ min: 3, max: 50 })
    .withMessage("O nome deve ter entre 3 e 50 caracteres")
    .isAlpha("pt-BR", { ignore: " " })
    .withMessage("O nome deve conter apenas letras"),
    body("cpf").isMobilePhone().notEmpty()
    .withMessage("Coloque um telefone valido"),
    body('senha')
    .isLength({ min: 8 })
    .withMessage('A senha deve ter no mínimo 8 caracteres')
    .matches(/[A-Z]/)
    .withMessage('A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/)
    .withMessage('A senha deve conter pelo menos um número')
    .matches(/[^A-Za-z0-9]/)
    .withMessage('A senha deve conter pelo menos um caractere especial'),
    body('cpf')
    .custom((valor) => {
        const cpf = valor.replace(/\D/g, '');

        if (cpf.length === 11) {
            return true; // CPF
        }

        if (cpf.length === 14) {
            return true; // CNPJ
        }

        throw new Error('Digite um CPF ou CNPJ válido');
    }) ,(req, res)=>{
        
    const errors = validationResult(req);

if (!errors.isEmpty()) {
    console.log(errors);

    return res.render("pages/cadastro_contratante", {
        erros: errors,
        valores: req.body,
        resultado: req.body
    });
    }

    return res.redirect("/preferencias1");

})

router.post("/cadastro-freelancer",
    body("email").isEmail().notEmpty()
    .withMessage("Coloque um email valido!"),
   body("completo")
    .notEmpty()
    .withMessage("O nome é obrigatório")
    .isLength({ min: 3, max: 50 })
    .withMessage("O nome deve ter entre 3 e 50 caracteres")
    .isAlpha("pt-BR", { ignore: " " })
    .withMessage("O nome deve conter apenas letras"),
    body("cpf").isMobilePhone().notEmpty()
    .withMessage("Coloque um telefone valido"),
    body('senha')
    .isLength({ min: 8 })
    .withMessage('A senha deve ter no mínimo 8 caracteres')
    .matches(/[A-Z]/)
    .withMessage('A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/)
    .withMessage('A senha deve conter pelo menos um número')
    .matches(/[^A-Za-z0-9]/)
    .withMessage('A senha deve conter pelo menos um caractere especial'),
    body('cpf')
    .custom((valor) => {
        const cpf = valor.replace(/\D/g, '');

        if (cpf.length === 11) {
            return true; // CPF
        }

        if (cpf.length === 14) {
            return true; // CNPJ
        }

        throw new Error('Digite um CPF ou CNPJ válido');
    }) ,(req, res)=>{
        
    const errors = validationResult(req);

if (!errors.isEmpty()) {
    console.log(errors);

    return res.render("pages/cadastro_freelancer", {
        erros: errors,
        valores: req.body,
        resultado: req.body
    });
    }

    return res.redirect("/habilidades1");

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