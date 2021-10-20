DROP DATABASE IF EXISTS albuns;
CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artista (
    artista_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (artista_id)
);

CREATE TABLE album (
    album_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
	artista_id INT NOT NULL ,
    release_year DATETIME NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
    PRIMARY KEY (album_id)
);
    
CREATE TABLE estilo (
    estilo_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (estilo_id)
);

CREATE TABLE cancao (
	cancao_id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    estilo_id INT NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estilo(estilo_id),
    FOREIGN KEY (album_id) REFERENCES album(album_id),
    PRIMARY KEY (cancao_id)
);
