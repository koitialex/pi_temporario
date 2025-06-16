create database MantoDeCampeoes;
use MantoDeCampeoes;
 
create table cliente(
id_cliente int primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null unique,
telefone varchar(12) not null,
senha varchar(50) not null,
pergunta1 varchar(100) not null,
pergunta2 varchar(100) not null,
resposta_pergunta1 varchar(100) not null,
resposta_pergunta2 varchar(100) not null
);
 
create table pagamento(
id_pagamento int primary key auto_increment,
metodo_pagamento varchar(30) not null,
status_pagamento varchar(30) not null,
data_pagamento varchar(50) not null,
valor double(6,2) not null
);
 
create table produto(
id_produto int primary key auto_increment,
nome_produto varchar(50) not null,
estoque varchar(50) not null,
categoria varchar(50) not null,
valor double(5,2) not null,
descrição varchar (200)
 
)
 
 
 
insert into pagamento(metodo_pagamento,status_pagamento,data_pagamento,valor)values
('Cartão de Crédito', 'Pago', '2025-04-20 14:32:00', 150.75),
('Boleto', 'Pendente', '2025-04-21 10:00:00', 89.90),
('Pix', 'Pago', '2025-04-19 18:45:00', 230.00),
('Transferência Bancária', 'Cancelado', '2025-04-18 09:15:00', 120.50),
('Dinheiro', 'Pago', '2025-04-22 16:20:00', 60.00);
 
select * from pagamento;
 
update pagamento 
set valor = 200.05
where id_pagamento = 1;