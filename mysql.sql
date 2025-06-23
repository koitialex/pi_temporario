create database MantoDeCampeoes;
use MantoDeCampeoes;

CREATE TABLE CLIENTE (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    pergunta1 varchar(100) not null,
    pergunta2 varchar(100) not null,
    resposta1 varchar(100) not null,
    resposta2 varchar(100) not null,
    data_cadastro DATE
    
);
/*
CREATE TABLE PEDIDO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    sitaucao VARCHAR(50),
    data_pedido DATE,
    valor_total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(ID)
);

*/

CREATE TABLE PRODUTO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2),
    estoque INT,
    imagem varchar(250),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES CATEGORIA(id)
);

CREATE TABLE ITENSPEDIDO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES PEDIDO(id),
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id)
);
CREATE TABLE CARRINHO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em datetime,
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(ID)
);

CREATE TABLE ITENSCARRINHO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_carrinho INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    subtotal DECIMAL(10,2),
    FOREIGN KEY (id_carrinho) REFERENCES CARRINHO(id),
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id)
);


select * from pagamento;


