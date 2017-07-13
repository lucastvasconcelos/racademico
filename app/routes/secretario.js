module.exports = (app) => {
    app.get("/secretario/:matricula", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let SecretarioDAO = new app.infra.SecretarioDAO(connection)
        let secretario = req.params
        SecretarioDAO.procurar_secretario(secretario, (err, result) => {
            console.log(err)
            console.log(result)
            res.render("usuario/secretario/perfil", { secretario: result[0] })
        })
    })

    app.get("/secretario/:matricula/matricular", (req, res, next) => {
        let secretario = req.params
        res.render("usuario/secretario/matricular", { secretario: secretario.matricula })
    })
    app.get("/secretario/:matricula/matricular-sucesso", (req, res, next) => {
        let secretario = req.params        
        res.render("usuario/secretario/matricula-sucesso", { secretario })
    })
    app.post("/secretario/:matricula/matricular", (req, res, next) => {
        let matricula = req.params.matricula
        let requisicao = req.body
        let connection = app.infra.connectionFactory()
        let SecretarioDAO = new app.infra.SecretarioDAO(connection)
        SecretarioDAO.matricular(requisicao, (err, result) => {
            console.log(err)
            let novo_aluno = requisicao.id_aluno
            SecretarioDAO.matricularCurso(novo_aluno,(err,result)=>{
                console.log(err)
                console.log(result)
                res.redirect("/secretario/" + matricula + "/matricular-sucesso")
            })
        })
    })

    app.get("/secretario/:matricula/documento", (req, res, next) => {
        let secretario = req.params
        res.render("usuario/secretario/documento", { secretario: secretario.matricula })
    })

    app.get("/secretario/:matricula/trancar", (req, res, next) => {
        let secretario = req.params
        res.render("usuario/secretario/trancar", { secretario: secretario.matricula })
    })
}