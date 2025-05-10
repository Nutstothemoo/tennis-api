CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    picture VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS players (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    shortname VARCHAR(50) NOT NULL,
    sex CHAR(1) NOT NULL,
    country_id INT REFERENCES countries(id),
    picture VARCHAR(255) NOT NULL,
    rank INT NOT NULL,
    points INT NOT NULL,
    weight INT NOT NULL,
    height INT NOT NULL,
    age INT NOT NULL,
    last INT[] NOT NULL
);
