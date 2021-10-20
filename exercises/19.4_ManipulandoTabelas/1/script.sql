-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES('Robertson', 'Souza', 5, 'robertson.nunes@sakilastaff.com', 1, 1, 'Robb');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username) VALUES
('Samuel', 'Neves', 6, 1, 1, 'Sam'),
('Arlen', 'Freitas', 7, 1, 1, 'Arlen');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name) VALUES
('Adventure'),
('Biography'),
('Thriller');


-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);