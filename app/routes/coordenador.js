    module.exports = (app) => {
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
        let coordenador = req.params
        res.render("usuario/coordenador/alocar", { coordenador: coordenador })
    })
    }