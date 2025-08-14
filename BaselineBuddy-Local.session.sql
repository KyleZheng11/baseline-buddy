CREATE TABLE if NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)

INSERT INTO users (username, email) VALUES 
    ('joey', 'joey@gmail.com'),
    ('chandler', 'chandler@gmail.com'),
    ('monica', 'monica@gmail.com'),
    ('rachehl', 'rachel@gmail.com'),
    ('ross', 'ross@gmail.com'),
    ('phoebe', 'phoebe@gmail.com');