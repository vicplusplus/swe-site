import React from 'react';
import Link from 'next/link';

export default function TripPanel() {
    // This is a placeholder for your trips data
    const trips = ['Trip 1', 'Trip 2', 'Trip 3'];

    return (
        <div>
            <h2>Trips</h2>
            <ul>
                {trips.map((trip, index) => (
                    <li key={index}>
                        <Link href={`/trip/${index}`}>{trip}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/trip/">Create New Trip</Link>
        </div>
    );
}