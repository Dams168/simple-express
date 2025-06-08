CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text,
    price numeric(10, 2) NOT NULL
);
