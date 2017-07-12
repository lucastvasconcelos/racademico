var express = require('express');
var router = express.Router();
var url = require("url")
/* GET home page. */
router.get('/', (req,res,next)=> {
  res.render("interface/home")
});

router.get('/home',(req,res,next)=> {
    res.render("interface/home")
})

router.get("/login",(req,res,next)=>{
    res.render("interface/login")
})

router.post("/login",(req,res,next)=>{
    let requisicao = req.body
    let matricula = requisicao.matricula
    let senha = requisicao.senha
    let acesso = requisicao.acesso
    if(matricula == "123" && senha == "123" && acesso == "Aluno"){
        res.redirect('/aluno/'+requisicao.matricula)
    }
    else if(matricula == "123" && senha == "123" && acesso == "Professor"){
        res.redirect('/professor/'+requisicao.matricula)
    }
    else if(matricula == "123" && senha == "123" && acesso == "Secretária"){
        res.redirect('/secretario/'+requisicao.matricula)
    }
    else if(matricula == "123" && senha == "123" && acesso == "Coordenador"){
        res.redirect('/coordenador/'+requisicao.matricula)
    }
    else{
        res.redirect("erro")
    }
})


router.get("/contato",(req,res,next)=>{
    res.render("interface/contato")
})

////////////////////////////////////////////////////
//ALUNO
///////////////////////////////////////////////////

router.get("/aluno/:matricula",(req,res,next)=>{
    let aluno = req.params
    console.log(aluno)
    res.render("usuario/aluno/perfil",{aluno: aluno.matricula})
})

router.get("/aluno/:matricula/horario",(req,res,next)=>{
    let requisicao = req.params
    let aluno = requisicao
    
    res.render("usuario/aluno/horario",{aluno:aluno.matricula})
})

router.get("/aluno/:matricula/diario",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/diario",{aluno:aluno})
})

router.get("/aluno/:matricula/documento",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/documento",{aluno:aluno})
})

router.get("/aluno/:matricula/calendario",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/calendario",{aluno:aluno})
})

router.get("/aluno/:matricula/material",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/material",{aluno:aluno})
})

//////////////////////////////////////////////////////////////
// PROFESSOR
//////////////////////////////////////////////////////////////

router.get("/professor/:matricula",(req,res,next)=>{
    let professor = req.params
    res.render("usuario/professor/perfil",{professor: professor.matricula})
})

router.get("/professor/:matricula/diario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/diario",{professor:professor})
})

router.get("/professor/:matricula/horario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/horario",{professor:professor})
})

router.get("/professor/:matricula/material",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/material",{professor:professor})
})

router.get("/professor/:matricula/calendario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/calendario",{professor:professor})
})

/////////////////////////////////////////////////////////////////
// COORDENADOR
////////////////////////////////////////////////////////////////

router.get("/coordenador/:matricula",(req,res,next)=>{
    let coordenador = req.params
    res.render("usuario/coordenador/perfil",{coordenador: coordenador.matricula})
})

router.get("/coordenador/:matricula/alocar",(req,res,next)=>{
    let coordenador = req.params.matricula
    res.render("usuario/coordenador/alocar",{coordenador:coordenador})
})

//////////////////////////////////////////////////////////////////
/// SECRETARIO
/////////////////////////////////////////////////////////////////

router.get("/secretario/:matricula",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/perfil",{secretario: secretario.matricula})
})

router.get("/secretario/:matricula/matricular",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/matricular",{secretario: secretario.matricula})
})

router.get("/secretario/:matricula/documento",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/documento",{secretario: secretario.matricula})
})

router.get("/secretario/:matricula/trancar",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/trancar",{secretario: secretario.matricula})
})
module.exports = router;

