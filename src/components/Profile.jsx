import React from 'react';

function Profile() {
    const person = {
        name: 'Akansh Saini', // Replace with dynamic data if needed
        carNumber: 'EV1234XYZ', // Replace with dynamic data if needed
        photo: 'https://drive.google.com/file/d/1u7dUI7ogZuz8TVbDvrHpzLKVxVGbQvI_/view?usp=drive_link', // Replace with the actual photo URL
        email: 'akanshsaini@gmail.com', // Example email
        location: 'New Delhi, India' // Example location
    };

    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center" style={{ fontFamily: "'Roboto', sans-serif", color: '#333' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Profile Section</h1>
                <div className="profile-info">
                    <img src={person.photo} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px', border: '5px solid #4CAF50' }} />
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{person.name}</h3>
                    <p style={{ fontSize: '1rem', marginBottom: '5px' }}>EV Car Number: {person.carNumber}</p>
                    <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Email: {person.email}</p>
                    <p style={{ fontSize: '1rem', marginBottom: '20px' }}>Location: {person.location}</p>
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
