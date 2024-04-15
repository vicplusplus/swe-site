import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push('/dashboard');
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
            <Link href="/forgot-password" className="text-blue-500">Forgot password?</Link>
        </div>
    );
}