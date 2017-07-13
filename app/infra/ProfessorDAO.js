class ProfessorDAO{
    constructor(_connection){
        this._connection = _connection
    }

    procurar_professor(requisicao,callback){
        let query = "select * from professor where id_professor="+requisicao.matricula
        console.log(query)
        this._connection.query(query,callback)
    }
}

module.exports = (app) => {
    return ProfessorDAO
}