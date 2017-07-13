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

    ////////////////////////////////////////////////////
    //ALUNO
    ///////////////////////////////////////////////////

    app.get("/aluno/:matricula", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let AlunoDAO = new app.infra.AlunoDAO(connection)
        let aluno = req.params
        AlunoDAO.procurar_aluno(aluno, (err, result) => {
            res.render("usuario/aluno/perfil", { aluno: result[0] })
        })
    })

    app.get("/aluno/:matricula/horario", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let AlunoDAO = new app.infra.AlunoDAO(connection)
        let aluno = req.params
        let elementos = []
        AlunoDAO.procurar_horario(aluno, (err, result) => {
            let disciplina = result[0].id_disciplina
            let sala = result[0].id_sala
            let horario = result[0].id_turma
            AlunoDAO.procurar_horario_disciplina(disciplina, (err, result) => {
                let nome_disciplina = result[0].nome
                elementos.push(nome_disciplina)
                AlunoDAO.procurar_horario_sala(sala, (err, result) => {
                    let nome_sala = result[0].nome
                    elementos.push(nome_sala)
                    AlunoDAO.procurar_horario_horario(horario, (err, result) => {
                        let nome_horario = result[0].horario
                        elementos.push(nome_horario)
                        res.render("usuario/aluno/horario", { aluno: aluno, nome_disciplina: elementos[0], nome_sala: elementos[1], horario: elementos[2] })
                    })
                })
            })
        })
    })

    app.get("/aluno/:matricula/diario", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let AlunoDAO = new app.infra.AlunoDAO(connection)
        let aluno = req.params
        AlunoDAO.procurar_diario(aluno, (err, result) => {
            let disciplina = result[0].id_disciplina
            AlunoDAO.procurar_diario_disciplina(disciplina, (err, result) => {
                console.log(result)
                res.render("usuario/aluno/diario", { aluno: aluno, nome_disciplina: result[0].nome, conteudo: result[0].conteudo })
            })
        })
    })

    app.get("/aluno/:matricula/documento", (req, res, next) => {
        let aluno = req.params.matricula
        res.render("usuario/aluno/documento", { aluno: aluno })
    })

    app.get("/aluno/:matricula/calendario", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let AlunoDAO = new app.infra.AlunoDAO(connection)
        let aluno = req.params
        AlunoDAO.procurar_calendario(aluno, (err, result) => {
            let calendario = result[0].id_calendario
            console.log(calendario)
            AlunoDAO.procurar_calendario_datas(calendario,(err,result)=>{
                console.log(result)
                res.render("usuario/aluno/calendario",{aluno:aluno,semestre:result[0].semestre,data_inicio:result[0].data_inicio,data_fim:result[0].data_fim})
            })
        })
    })

    app.get("/aluno/:matricula/material", (req, res, next) => {
        let aluno = req.params.matricula
        res.render("usuario/aluno/material", { aluno: aluno })
    })

    //////////////////////////////////////////////////////////////
    // PROFESSOR
    //////////////////////////////////////////////////////////////

    app.get("/professor/:matricula", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let ProfessorDAO = new app.infra.ProfessorDAO(connection)
        let professor = req.params
        ProfessorDAO.procurar_professor(professor, (err, result) => {
            res.render("usuario/professor/perfil", { professor: result[0] })
        })
    })


    app.get("/professor/:matricula/diario", (req, res, next) => {
        let professor = req.params.matricula
        res.render("usuario/professor/diario", { professor: professor })
    })

    app.get("/professor/:matricula/horario", (req, res, next) => {
        let professor = req.params.matricula
        res.render("usuario/professor/horario", { professor: professor })
    })

    app.get("/professor/:matricula/material", (req, res, next) => {
        let professor = req.params.matricula
        res.render("usuario/professor/material", { professor: professor })
    })

    app.get("/professor/:matricula/calendario", (req, res, next) => {
        let professor = req.params.matricula
        res.render("usuario/professor/calendario", { professor: professor })
    })

    /////////////////////////////////////////////////////////////////
    // COORDENADOR
    ////////////////////////////////////////////////////////////////

    app.get("/coordenador/:matricula", (req, res, next) => {
        let connection = app.infra.connectionFactory()
        let CoordenadorDAO = new app.infra.CoordenadorDAO(connection)
        let coordenador = req.params
        CoordenadorDAO.procurar_coordenador(coordenador, (err, result) => {
            console.log(err)
            console.log(result)
            res.render("usuario/coordenador/perfil", { coordenador: result[0] })
        })
    })

    app.get("/coordenador/:matricula/alocar", (req, res, next) => {
        let coordenador = req.params.matricula
        res.render("usuario/coordenador/alocar", { coordenador: coordenador })
    })

    //////////////////////////////////////////////////////////////////
    /// SECRETARIO
    /////////////////////////////////////////////////////////////////

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

    app.get("/secretario/:matricula/documento", (req, res, next) => {
        let secretario = req.params
        res.render("usuario/secretario/documento", { secretario: secretario.matricula })
    })

    app.get("/secretario/:matricula/trancar", (req, res, next) => {
        let secretario = req.params
        res.render("usuario/secretario/trancar", { secretario: secretario.matricula })
    })
}