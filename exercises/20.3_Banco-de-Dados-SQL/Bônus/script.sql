/* Exercício 3 : Usando o banco de dados Scientists restaurado no dia anterior, realize os exercícios a seguir. Caso ainda não tenha restaurado o banco, utilize o código abaixo para fazê-lo.
Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.*/
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'A%'
ORDER BY Name;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1 .
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A .
SELECT Name, Code FROM Scientists.Projects
WHERE NAME NOT LIKE 'A%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H .
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';
