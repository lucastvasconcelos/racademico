class AlunoDAO{
    constructor(_connection){
        this._connection = _connection
    }

    procurar_aluno(requisicao,callback){
        let query = "select * from aluno where id_aluno="+requisicao.matricula
        console.log(query)
        this._connection.query(query,callback)
    }
}

module.exports = (app) => {
    return AlunoDAO
}