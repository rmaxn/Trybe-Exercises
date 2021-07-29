/* Escreva uma query que exiba todos os filmes cadastrados no banco de dados. */
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(title) FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;
SELECT DISTINCT COUNT(last_name) FROM sakila.actor;

SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;

SELECT * FROM sakila.language LIMIT 6 OFFSET 1;

SELECT * FROM sakila.film;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film;