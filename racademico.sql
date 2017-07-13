create database RAcademico;

use RAcademico;

create table aluno(
	id_aluno INT NOT NULL UNIQUE,
	nome VARCHAR(45) NOT NULL,
	endereco VARCHAR(45) NOT NULL,
	data_nascimento VARCHAR(45) NOT NULL,
	nome_pai VARCHAR(45) NOT NULL,
	nome_mae VARCHAR(45) NOT NULL,
	rg VARCHAR(45) NOT NULL,
	cpf VARCHAR(45) NOT NULL,
	telefone VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL,
	PRIMARY KEY(id_aluno)
);

insert into aluno VALUES(
	1,
	'Vinicius Almeida Azevedo',
	'Rua Monte Pascal, 1891',
	'13/06/1996',
    'Thomaz Azevedo',
    'Bruna Almeida',
    403289440,
    26252775568,
    970963274,
	'vinialmeida@gmail.com'
);
insert into aluno VALUES(
	2,
	'Murilo Gomes Ribeiro',
	'Travessa Tenente Maurício Medeiros, 795',
	'24/03/1994',
    'Antonio Ribeiro',
    'Maria Gomes',
    429434121,
    22267613492,
    920509077,
	'murilogr@gmail.com'
);


create table frequencia(
	id_frequencia INT NOT NULL UNIQUE,
    data_frequencia VARCHAR(45) NOT NULL,
    presenca VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_frequencia)
);

insert into frequencia values(
    1,
    "30/02/2017",
    2
);

create table avaliacao(
	id_avaliacao INT NOT NULL UNIQUE,
    data_avaliacao VARCHAR(45) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_avaliacao)
);

insert into avaliacao values(
    1,
    "30/02/20170",
    "Prova"
);

create table nota(
	id_nota INT NOT NULL UNIQUE,
    nota VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_nota),
    id_avaliacao INT NOT NULL UNIQUE,
    FOREIGN KEY(id_avaliacao) REFERENCES avaliacao(id_avaliacao)
);

insert into nota values(
    1,
    9,
    1
);

create table secretario(
	id_secretario INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    endereco VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_secretario)
);

insert into secretario values(
    1,
    'Luan Cardoso Barbosa',
    'Rua Eufrídio Moreira Andrade, 1506',
    946895339
);

create table matricula(
	id_matricula INT NOT NULL UNIQUE,
    validacao VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_matricula),
    id_aluno INT NOT NULL UNIQUE,
    id_frequencia INT NOT NULL UNIQUE,
    id_nota INT NOT NULL UNIQUE,
    id_avaliacao INT NOT NULL UNIQUE,
    id_secretario INT NOT NULL UNIQUE,
    FOREIGN KEY(id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY(id_frequencia) REFERENCES frequencia(id_frequencia),
    FOREIGN KEY(id_nota) REFERENCES nota(id_nota),
    FOREIGN KEY(id_avaliacao) REFERENCES nota(id_avaliacao),
    FOREIGN KEY(id_secretario) REFERENCES secretario(id_secretario)
);

insert into matricula values(
    1,
    1,
    1,
    1,
    1,
    1,
    1
);

create table coordenador(
	id_coordenador INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    enderco VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    titulacao VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_coordenador)
);

insert into coordenador values (
    1,
    "Luan Cardoso Barbosa",
    "Rua Eufrídio Moreira Andrade, 1506",
    946895339,
    "Doutor"
);

create table departamento(
	id_departamento INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_departamento),
    id_coordenador INT NOT NULL UNIQUE,
    FOREIGN KEY(id_coordenador) REFERENCES coordenador(id_coordenador)
);

insert into departamento values(
    1,
    "DETEL",
    "Departamento de Telecomunicações",
    1
);

create table professor(
	id_professor INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    endereco VARCHAR(45) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    titulacao VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_professor),
    id_departamento INT NOT NULL UNIQUE,
    FOREIGN KEY(id_departamento) REFERENCES departamento(id_departamento)
);

insert into professor values(
    1,
    "Miguel Ferreira Carvalho",
    "Rua São Miguel, 70",
    955295686,
    "Doutor",
    1
);


create table sala(
	id_sala INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    capacidade VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_sala)
);
insert into sala values(
    1,
    'LMC1',
    30
);
insert into sala values(
    2,
    'LMC2',
    30
);
insert into sala values(
    3,
    'LMC3',
    30
);

create table turma(
	id_turma INT NOT NULL UNIQUE,
    dia_semana VARCHAR(45) NOT NULL,
    horario VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_turma),
    id_sala INT NOT NULL UNIQUE,
    FOREIGN KEY(id_sala) REFERENCES sala(id_sala)
);


insert into turma values(
    1,
    "Segunda e Quarta",
    "13:30",
    2
);
insert into turma values(
    2,
    "Segunda e Quarta",
    "16:00",
    3
);

create table disciplina(
	id_disciplina INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    conteudo VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_disciplina),
    id_turma INT NOT NULL UNIQUE,
    id_sala INT NOT NULL UNIQUE,
    FOREIGN KEY(id_turma) REFERENCES turma(id_turma),
    FOREIGN KEY(id_sala) REFERENCES sala(id_sala)
);

insert into disciplina values (
    1,
    "Banco de Dados",
    "SQL",
    1,
    2
);
insert into disciplina values (
    2,
    "Engenharia de Software",
    "UML",
    2,
    3
);

create table calendario(
	id_calendario INT NOT NULL UNIQUE,
    semestre VARCHAR(45) NOT NULL,
    data_inicio VARCHAR(45) NOT NULL,
    data_fim VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_calendario)
);

insert into calendario values(
    1,
    '2016.1',
    '03/02/2017',
    '20/07/2017'
);

create table curso(
	id_curso INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    PRIMARY KEY(id_curso),
    id_disciplina INT NOT NULL UNIQUE,
    id_turma INT NOT NULL UNIQUE,
    id_sala INT NOT NULL UNIQUE,
    id_matricula INT NOT NULL UNIQUE,
    id_aluno INT NOT NULL UNIQUE,
    id_frequencia INT NOT NULL UNIQUE,
    id_calendario INT NOT NULL UNIQUE,
    FOREIGN KEY(id_disciplina) REFERENCES disciplina(id_disciplina),
    FOREIGN KEY(id_turma) REFERENCES turma(id_turma),
    FOREIGN KEY(id_sala) REFERENCES turma(id_sala),
    FOREIGN KEY(id_matricula) REFERENCES matricula(id_matricula),
    FOREIGN KEY(id_aluno) REFERENCES matricula(id_aluno),
    FOREIGN KEY(id_frequencia) REFERENCES matricula(id_frequencia),
    FOREIGN KEY(id_calendario) REFERENCES calendario(id_calendario)
);

insert into curso values(
    1,
    'Engenharia de Computação',
    1,
    1,
    2,
    1,
    1,
    1,
    1
);



