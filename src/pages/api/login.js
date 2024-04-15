import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
    // PostgreSQL parameters
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Check if user exists
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (user.rowCount === 0) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // User is authenticated
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};