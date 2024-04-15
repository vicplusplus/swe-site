import React from 'react';
import TripEditor from './TripEditor';

export default function TripPage({ trip }) {
    return (
        <div>
            <h1>Edit Trip</h1>
            <TripEditor initialTrip={trip} />
        </div>
    );
}