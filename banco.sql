CREATE DATABASE 'Fabrica de Carros';

USE 'Fabrica de Carros';

CREATE TABLE 'fornecedores' (
  'id_fornecedor' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  'nome_fornecedor' VARCHAR(50) NOT NULL,
  'cnpj_fornecedor' VARCHAR(20) NOT NULL,
  'peca_fornecedor' VARCHAR(50) NOT NULL
);

CREATE TABLE 'funcionario' (
  'matricula_funcionario' INT NOT NULL PRIMARY KEY,
  'nome_funcionario' VARCHAR(50) NOT NULL,
  'cpf_funcionario' VARCHAR(20) NOT NULL,
  'setor_funcionario' VARCHAR(50) NOT NULL,
  'gestor_funcionario' VARCHAR(50) NOT NULL,
  'data_admissao' DATE NOT NULL
);


CREATE TABLE 'vendas' (
  'id_venda' INT NOT NULL PRIMARY KEY,
  'modelo_veiculo' VARCHAR(50) NOT NULL,
  'dt_venda' DATE NOT NULL,
  'id_fornecedor' INT NOT NULL,
  'matricula_funcionario' INT NOT NULL,
  FOREIGN KEY ('id_fornecedor') REFERENCES 'fornecedores' ('id_fornecedor'),
  FOREIGN KEY ('matricula_funcionario') REFERENCES 'funcionario' ('matricula_funcionario')
);

CREATE TABLE 'pedido' (
  'id_pedido' INT NOT NULL PRIMARY KEY,
  'dt_pedido' DATE NOT NULL,
  'id_fornecedor' INT NOT NULL,
  FOREIGN KEY ('id_fornecedor') REFERENCES 'fornecedores' ('id_fornecedor')
);