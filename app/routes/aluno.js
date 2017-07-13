    ////////////////////////////////////////////////////
    //ALUNO
    ///////////////////////////////////////////////////
module.exports = (app) => {
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
}