-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER Insertions
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
NEW.disponivel_em_estoque = 1,
NEW.acao = 'INSERT';
END $$
DELIMITER ;

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER Updates
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
NEW.disponivel_em_estoque = 1,
NEW.acao = 'UPDATE';
END $$
DELIMITER ;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis
DELIMITER $$

CREATE TRIGGER Deletes
BEFORE DELETE ON carros
FOR EACH ROW
BEGIN
INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
VALUES ('DELETE', NOW());
END $$
DELIMITER ;
