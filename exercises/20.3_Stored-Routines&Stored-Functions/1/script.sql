-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$ 

CREATE PROCEDURE getMostPopularActor()
BEGIN
SELECT actor_id, COUNT(film_id) FROM sakila.film_actor
GROUP BY actor_id
ORDER BY count(film_id) DESC
LIMIT 10;
END $$

DELIMITER ;


CALL getMostPopularActor();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE GetMovieCategory(IN string VARCHAR(100))
BEGIN
SELECT a.film_id AS 'ID', a.title AS 'FILME', fc.category_id, c.name AS 'Category' FROM sakila.film a
INNER JOIN sakila.film_category fc ON a.film_id = fc.film_id
INNER JOIN sakila.category c ON fc.category_id = c.category_id
WHERE c.name = string;
END $$

DELIMITER ;

CALL GetMovieCategory('Action');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE GetActiveCustomer(INOUT customerMail VARCHAR(100))
BEGIN
SELECT IF(`active`, 'Ativo', 'Inativo') AS status FROM sakila.customer
WHERE email = customerMail;
END $$

DELIMITER ;

SELECT 'MARY.SMITH@sakilacustomer.org' INTO @userMail;
CALL GetActiveCustomer(@userMail);