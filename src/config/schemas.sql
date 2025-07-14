CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text,
    price numeric(10, 2) NOT NULL
);

INSERT INTO products (name, description, price)
SELECT 
    'Product ' || gs AS name,
    'Description for product ' || gs,
    round((random() * 90000 + 100000)::numeric, 2) AS price 
FROM generate_series(1, 2000) AS gs;