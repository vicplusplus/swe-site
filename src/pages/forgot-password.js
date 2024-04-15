import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ForgotPassword() {
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="text-gray-500">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div>
                <Link href="/login" className="text-blue-500">Back to Login</Link>
            </div>
            {submitted &&
                <div>
                    <Link href="#" onClick={() => router.push('/reset-password')} className="text-blue-500">
                        Debug: Go to Reset Password
                    </Link>
                </div>
            }

        </div>
    );
}