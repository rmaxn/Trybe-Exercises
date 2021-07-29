-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    Id, Title
FROM
    hotel.Books
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            Id = book_id);

SELECT * FROM hotel.Books_Lent;
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    Id, Title
FROM
    hotel.Books
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            id = Book_id AND returned = 0
                AND Title LIKE '%Lost%');

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    c.Name
FROM
    hotel.Customers c
WHERE
    NOT EXISTS ( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerId = c.CustomerId);
            
-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    cu.name, ca.name
FROM
    hotel.Cars AS ca
        INNER JOIN
    hotel.Customers AS cu
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cu.CustomerId
                AND carID = ca.ID);