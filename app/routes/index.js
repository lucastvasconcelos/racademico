module.exports = (app) => {
app.get('/', (req,res,next)=> {
  res.render("interface/home")
});

app.get('/home',(req,res,next)=> {
    res.render("interface/home")
})

app.get("/login",(req,res,next)=>{
    res.render("interface/login")
})

app.post("/login",(req,res,next)=>{
    let requisicao = req.body
    let matricula = requisicao.matricula
    let senha = requisicao.senha
    let acesso = requisicao.acesso
    if(senha == "123" && acesso == "Aluno"){
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


app.get("/contato",(req,res,next)=>{
    res.render("interface/contato")
})

////////////////////////////////////////////////////
//ALUNO
///////////////////////////////////////////////////

app.get("/aluno/:matricula",(req,res,next)=>{
    let connection = app.infra.connectionFactory()
    let AlunoDAO = new app.infra.AlunoDAO(connection)
    let aluno = req.params
    AlunoDAO.procurar_aluno(aluno,(err,result)=>{
        console.log(err)
        console.log(result)
        res.render("usuario/aluno/perfil",{aluno: result[0]})
    })
})

app.get("/aluno/:matricula/horario",(req,res,next)=>{
    let requisicao = req.params
    let aluno = requisicao
    
    res.render("usuario/aluno/horario",{aluno:aluno.matricula})
})

app.get("/aluno/:matricula/diario",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/diario",{aluno:aluno})
})

app.get("/aluno/:matricula/documento",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/documento",{aluno:aluno})
})

app.get("/aluno/:matricula/calendario",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/calendario",{aluno:aluno})
})

app.get("/aluno/:matricula/material",(req,res,next)=>{
    let aluno = req.params.matricula
    res.render("usuario/aluno/material",{aluno:aluno})
})

//////////////////////////////////////////////////////////////
// PROFESSOR
//////////////////////////////////////////////////////////////

app.get("/professor/:matricula",(req,res,next)=>{
    let professor = req.params
    res.render("usuario/professor/perfil",{professor: professor.matricula})
})

app.get("/professor/:matricula/diario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/diario",{professor:professor})
})

app.get("/professor/:matricula/horario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/horario",{professor:professor})
})

app.get("/professor/:matricula/material",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/material",{professor:professor})
})

app.get("/professor/:matricula/calendario",(req,res,next)=>{
    let professor = req.params.matricula
    res.render("usuario/professor/calendario",{professor:professor})
})

/////////////////////////////////////////////////////////////////
// COORDENADOR
////////////////////////////////////////////////////////////////

app.get("/coordenador/:matricula",(req,res,next)=>{
    let coordenador = req.params
    res.render("usuario/coordenador/perfil",{coordenador: coordenador.matricula})
})

app.get("/coordenador/:matricula/alocar",(req,res,next)=>{
    let coordenador = req.params.matricula
    res.render("usuario/coordenador/alocar",{coordenador:coordenador})
})

//////////////////////////////////////////////////////////////////
/// SECRETARIO
/////////////////////////////////////////////////////////////////

app.get("/secretario/:matricula",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/perfil",{secretario: secretario.matricula})
})

app.get("/secretario/:matricula/matricular",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/matricular",{secretario: secretario.matricula})
})

app.get("/secretario/:matricula/documento",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/documento",{secretario: secretario.matricula})
})

app.get("/secretario/:matricula/trancar",(req,res,next)=>{
    let secretario = req.params
    res.render("usuario/secretario/trancar",{secretario: secretario.matricula})
})
}