// pages/api/create-user.js
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Check if user already exists
        const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userExists.rowCount > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash and salt the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);

        res.status(201).json({ message: 'User created' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};