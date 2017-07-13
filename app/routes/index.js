module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.render("interface/home")
    });

    app.get('/home', (req, res, next) => {
        res.render("interface/home")
    })

    app.get("/login", (req, res, next) => {
        res.render("interface/login")
    })

    app.post("/login", (req, res, next) => {
        let requisicao = req.body
        let matricula = requisicao.matricula
        let senha = requisicao.senha
        let acesso = requisicao.acesso
        console.log(requisicao)
        if (senha == "123" && acesso == "Aluno") {
            res.redirect('/aluno/' + requisicao.matricula)
        }
        else if (senha == "123" && acesso == "Professor") {
            res.redirect('/professor/' + requisicao.matricula)
        }
        else if (senha == "123" && acesso == "Secretária") {
            res.redirect('/secretario/' + requisicao.matricula)
        }
        else if (senha == "123" && acesso == "Coordenador") {
            res.redirect('/coordenador/' + requisicao.matricula)
        }
        else {
            res.redirect("erro")
        }
    })


    app.get("/contato", (req, res, next) => {
        res.render("interface/contato")
    })

}