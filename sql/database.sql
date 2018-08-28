drop database if exists  desafio_brq;
create database desafio_brq;
use desafio_brq;

create table tarefa (
 id int primary key auto_increment,
 nomeTarefa varchar(100) not null,
 descricao varchar(255),
 feito boolean
 );

create table subtarefa(
id int primary key auto_increment,
nomeSubTarefa varchar(100) not null,
descricao varchar(255),
feito boolean,
id_tarefa int 
);
 
alter table subtarefa add constraint fk_tarefa foreign key (id_tarefa) references tarefa(id);


INSERT INTO `desafio_brq`.`tarefa` (`nomeTarefa`, `descricao`, `feito`) VALUES ('TAREFA 01', 'descricao 01', false);
INSERT INTO `desafio_brq`.`tarefa` (`nomeTarefa`, `descricao`, `feito`) VALUES ('TAREFA 02', 'descricao 02', false);
INSERT INTO `desafio_brq`.`tarefa` (`nomeTarefa`, `descricao`, `feito`) VALUES ('TAREFA 03', 'descricao 03', false);
INSERT INTO `desafio_brq`.`tarefa` (`nomeTarefa`, `descricao`, `feito`) VALUES ('TAREFA 04', 'descricao 04', false);

INSERT INTO `desafio_brq`.`subtarefa` (`nomeSubTarefa`, `descricao`, `feito`, `id_tarefa`) VALUES ('SUB TAREFA 01', 'descricao 01', false,1);
INSERT INTO `desafio_brq`.`subtarefa` (`nomeSubTarefa`, `descricao`, `feito`, `id_tarefa`) VALUES ('SUB TAREFA 02', 'descricao 02', false,1);
INSERT INTO `desafio_brq`.`subtarefa` (`nomeSubTarefa`, `descricao`, `feito`, `id_tarefa`) VALUES ('SUB TAREFA 03', 'descricao 03', false,1);



