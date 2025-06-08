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
}