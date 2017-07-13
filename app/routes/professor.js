
module.exports = (app) => {
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
}