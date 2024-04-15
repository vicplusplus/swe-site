import React, { useState } from 'react';

export default function TripEditor({ initialTrip }) {
    const [trip, setTrip] = useState(initialTrip || { name: '', events: [], expenses: [] });

    const handleInputChange = (event) => {
        setTrip({ ...trip, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the trip data to your server
        console.log(trip);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Trip Name:
                <input type="text" name="name" value={trip.name} onChange={handleInputChange} />
            </label>
            {/* Add form fields for events and expenses here */}
            <button type="submit">Save Trip</button>
        </form>
    );
}