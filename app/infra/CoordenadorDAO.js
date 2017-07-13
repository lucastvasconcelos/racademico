class CoordenadorDAO{
    constructor(_connection){
        this._connection = _connection
    }

    procurar_coordenador(requisicao,callback){
        let query = "select * from coordenador where id_coordenador="+requisicao.matricula
        console.log(query)
        this._connection.query(query,callback)
    }
}

module.exports = (app) => {
    return CoordenadorDAO
}