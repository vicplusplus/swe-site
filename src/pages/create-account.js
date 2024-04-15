import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CreateAccount() {
    const router = useRouter();
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const response = await fetch('/api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            alert("Error creating account");
        }
    };

    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Create Account</h1>
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
                    <label htmlFor="confirmPassword" className="text-gray-500">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <div>
                    <input type="checkbox" id="terms" name="terms" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
                    <label htmlFor="terms" className="text-gray-500">Accept Terms and Conditions</label>
                </div>
                <div>
                    <input type="submit" value="Submit" disabled={!acceptedTerms} />
                </div>
            </form>
            <Link href="/login" className="text-blue-500">Already have an account? Login</Link>
        </div>
    );
}