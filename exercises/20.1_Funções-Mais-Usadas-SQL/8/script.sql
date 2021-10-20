-- Exercícios
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT 
    MAX(SALARY) AS 'Maior Salário'
FROM
    hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
    MAX(SALARY) - MIN(SALARY) AS 'Diferença Salarial'
FROM
    hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT 
    AVG(SALARY) AS 'Média Salarial'
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT 
    SUM(SALARY) AS 'Soma do Salario'
FROM
    hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2)
FROM
    hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT 
    COUNT(*) AS 'Programadores'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT 
    JOB_ID AS 'ID do Cargo', SUM(SALARY) AS 'Soma Salarial'
FROM
    hr.employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID AS 'ID do Cargo', SUM(SALARY) AS 'Soma Salarial'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID AS 'ID do Cargo', AVG(SALARY) AS 'Média Salarial'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG(SALARY) DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID AS 'Id do Departamento',
    AVG(salary) AS 'Média Salarial' ,
    COUNT(*) AS 'Número de Empregados'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE hr.employees 
SET 
    PHONE_NUMBER = REPLACE(PRONE_NUMBER, '515', '777')
WHERE
    PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT *
FROM hr.employees
WHERE LENGTH(FIST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT 
    EMPLOYEE_ID AS 'Matrícula',
    FIRST_NAME AS 'Nome',
    LEFT(HIRE_DATE, 4) AS 'Ano'
FROM
    hr.employees

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT 
    EMPLOYEE_ID AS 'Matrícula',
    FIRST_NAME AS 'Nome',
    RIGHT(HIRE_DATE, 2) AS 'Dia'
FROM
    hr.employees

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT 
    EMPLOYEE_ID 'Matrícula',
    FIRST_NAME AS 'Nome',
    SUBSTRING(HIRE_DATE, 6, 2) 'Contratação'
FROM
    hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
    UPPER(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM
    hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
    LAST_NAME AS Sobrenome, HIRE_DATE AS 'Data de Contratação'
FROM
    hr.employees
WHERE
    HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT 
    FIRST_NAME AS 'Nome',
    LAST_NAME AS 'Sobrenome',
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'Dias Trabalhados'
FROM
    hr.employees;
