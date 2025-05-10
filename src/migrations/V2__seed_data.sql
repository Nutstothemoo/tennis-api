-- Insert countries
INSERT INTO countries (code, picture) VALUES
('SRB', 'https://tenisu.latelier.co/resources/Serbie.png'),
('USA', 'https://tenisu.latelier.co/resources/USA.png'),
('SUI', 'https://tenisu.latelier.co/resources/Suisse.png'),
('ESP', 'https://tenisu.latelier.co/resources/Espagne.png');

-- Insert players
INSERT INTO players (id, firstname, lastname, shortname, sex, country_id, picture, rank, points, weight, height, age, last) VALUES
(52, 'Novak', 'Djokovic', 'N.DJO', 'M', (SELECT id FROM countries WHERE code = 'SRB'), 'https://tenisu.latelier.co/resources/Djokovic.png', 2, 2542, 80000, 188, 31, ARRAY[1, 1, 1, 1, 1]),
(95, 'Venus', 'Williams', 'V.WIL', 'F', (SELECT id FROM countries WHERE code = 'USA'), 'https://tenisu.latelier.co/resources/Venus.webp', 52, 1105, 74000, 185, 38, ARRAY[0, 1, 0, 0, 1]),
(65, 'Stan', 'Wawrinka', 'S.WAW', 'M', (SELECT id FROM countries WHERE code = 'SUI'), 'https://tenisu.latelier.co/resources/Wawrinka.png', 21, 1784, 81000, 183, 33, ARRAY[1, 1, 1, 0, 1]),
(102, 'Serena', 'Williams', 'S.WIL', 'F', (SELECT id FROM countries WHERE code = 'USA'), 'https://tenisu.latelier.co/resources/Serena.png', 10, 3521, 72000, 175, 37, ARRAY[0, 1, 1, 1, 0]),
(17, 'Rafael', 'Nadal', 'R.NAD', 'M', (SELECT id FROM countries WHERE code = 'ESP'), 'https://tenisu.latelier.co/resources/Nadal.png', 1, 1982, 85000, 185, 33, ARRAY[1, 0, 0, 0, 1]);
