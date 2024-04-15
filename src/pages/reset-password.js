import React from 'react';
import Link from 'next/link';

export default function ResetPassword() {
    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Reset Password</h1>
            <form>
                <div>
                    <label htmlFor="password" className="text-gray-500">New Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="text-gray-500">Confirm New Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <Link href="/login" className="text-blue-500">
                Back to Login
            </Link>
        </div>
    );
}