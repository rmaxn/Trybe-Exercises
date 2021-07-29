-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
    f.film_id, f.replacement_cost, rc.film_id, rc.replacement_cost
FROM
    sakila.film AS f,
    sakila.film AS rc
WHERE
    f.replacement_cost = rc.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
    t.title, t.rental_duration
FROM
    sakila.film AS t,
    sakila.film AS rd
WHERE
    t.rental_duration = rd.rental_duration
        AND t.rental_duration BETWEEN 2 AND 4;