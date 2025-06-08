const pool = require('../config/db');

module.exports = class productController {
    static async getAllProducts(req, res) {
        try {
            const result = await pool.query('SELECT * FROM products');
            res.status(200).json({
                status: 'success',
                message: 'Successfully fetched all products',
                rowCount: result.rowCount,
                data: result.rows
            });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getProductById(req, res) {
        try {
            const id = Number(req.params.id);
            const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
            if (result.rowCount === 0) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'Product not found'
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Successfully fetched product',
                data: result.rows
            });
        } catch (error) {
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async createProduct(req, res) {
        try {
            const { name, price, description } = req.body;
            const result = await pool.query(
                'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *',
                [name, price, description]
            );
            res.status(201).json({
                status: 'success',
                message: 'Product created successfully',
                data: result.rows
            });
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}