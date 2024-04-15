import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="text-gray-500">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password" className="text-gray-500">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div>
                <Link href="/forgot-password" className="text-blue-500">Forgot password?</Link>
            </div>
            <div>
                <Link href="/create-account" className="text-blue-500">Create an account</Link>
            </div>

        </div>
    );
}