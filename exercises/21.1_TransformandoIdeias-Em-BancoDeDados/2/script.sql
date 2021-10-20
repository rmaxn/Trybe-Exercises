DROP DATABASE IF EXISTS zoologic;
CREATE DATABASE IF NOT EXISTS zoologic;
USE zoologic;

CREATE TABLE animal (
    animal_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(40) NOT NULL,
    idade INT,
    localizacao VARCHAR(100) NOT NULL,
    PRIMARY KEY (animal_id)
);

CREATE TABLE gerente (
    gerente_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (gerente_id)
);
    
CREATE TABLE cuidador (
    cuidador_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id)
        REFERENCES gerente (gerente_id),
    PRIMARY KEY (cuidador_id)
);

CREATE TABLE functions (
    cuidador_id INT,
    animal_id INT,
    FOREIGN KEY (cuidador_id)
        REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (animal_id)
        REFERENCES animal (animal_id)
);
