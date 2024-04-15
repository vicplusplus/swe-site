import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple-500 leading-normal">Dashboard</h1>
            <Link href="/login" className="text-blue-500">
                Logout
            </Link>
        </div>
    );
}