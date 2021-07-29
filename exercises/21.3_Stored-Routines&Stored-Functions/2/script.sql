-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila
DELIMITER $$

CREATE FUNCTION CountPaymentsById(id INT)
RETURNS INT READS SQL DATA
BEGIN 
DECLARE totalPayments INT;
SELECT 
    COUNT(payment_id)
FROM
    sakila.payment pid
WHERE
    pid.customer_id = id INTO totalPayments;
RETURN totalPayments;

END $$

DELIMITER ;

SELECT COUNTPAYMENTSBYID(1);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila
DELIMITER $$

CREATE FUNCTION GetMovieInventory(inventory_id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
DECLARE movieTitle VARCHAR(200);
SELECT f.title FROM sakila.film f
INNER JOIN sakila.inventory i ON i.film_id = f.film_id
WHERE i.inventory_id = inventory_id
INTO movieTitle;
RETURN movieTitle;

END $$

DELIMITER ;	

SELECT GetMovieInventory(2);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila
DELIMITER $$

CREATE FUNCTION MoviesByCategory(categoryName VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE Quantity INT;
SELECT 
    COUNT(*)
FROM
    sakila.film_category fc
        INNER JOIN
    sakila.category c ON c.category_id = fc.category_id
WHERE
    c.name = categoryName INTO Quantity;
RETURN Quantity;

END $$

DELIMITER ;

SELECT 'Action' INTO @categoryName;
SELECT MoviesByCategory(@categoryName);

