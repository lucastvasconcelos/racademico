class AlunoDAO{
    constructor(_connection){
        this._connection = _connection
    }

    procurar_aluno(requisicao,callback){
        let query = "select * from aluno where id_aluno="+requisicao.matricula
        console.log(query)
        this._connection.query(query,callback)
    }

    procurar_horario(requisicao,callback){
        let query1 = "select * from curso where id_aluno="+requisicao.matricula
        this._connection.query(query1,callback)
    }

    procurar_horario_disciplina(requisicao,callback){
        let query2 = "select nome from disciplina where id_disciplina="+requisicao
        this._connection.query(query2,callback)
    }

    procurar_horario_sala(requisicao,callback){
        let query = "select nome from sala where id_sala="+requisicao
        this._connection.query(query,callback)
    }

    procurar_horario_horario(requisicao,callback){
        let query = "select horario from turma where id_turma="+requisicao
        this._connection.query(query,callback)
    }

    procurar_diario(requisicao,callback){
        let query1 = "select * from curso where id_aluno="+requisicao.matricula
        this._connection.query(query1,callback)
    }
    
    procurar_diario_disciplina(requisicao,callback){
        let query = "select nome,conteudo from disciplina where id_disciplina="+requisicao
        this._connection.query(query,callback)
    }

    procurar_calendario(requisicao,callback){
        let query1 = "select * from curso where id_aluno="+requisicao.matricula
        this._connection.query(query1,callback)
    }

    procurar_calendario_datas(requisicao,callback){
        let query2 = "select * from calendario where id_calendario="+requisicao
        this._connection.query(query2,callback)
    }
}

module.exports = (app) => {
    return AlunoDAO
}