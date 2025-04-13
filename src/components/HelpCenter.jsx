import React from 'react';

function HelpCenter() {
    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center" style={{ fontFamily: "'Roboto', sans-serif", color: '#333' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Help Center</h1>

                <div className="mb-5">
                    <h4>How Can We Assist You?</h4>
                    <p>If you're experiencing any issues or need assistance, we’re here to help. Below are some of the most common topics:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li><strong>1. Account Issues</strong>: Learn how to reset your password, update your profile, and manage your account.</li>
                        <li><strong>2. Charging Station Problems</strong>: Find troubleshooting steps for charger issues and how to report malfunctions.</li>
                        <li><strong>3. EV Trip Planning</strong>: Get help with route optimization, finding nearby charging stations, and more.</li>
                    </ul>
                    <p>If you still need assistance, feel free to reach out via our <strong>Contact Us</strong> page.</p>
                </div>

                {/* Additional Help Section */}
                <div className="mb-5">
                    <h4>FAQs</h4>
                    <p><strong>Q: How do I add a new charging station?</strong></p>
                    <p>A: You can suggest a new charging station by filling out the form on the "Add Station" page.</p>
                    <p><strong>Q: How do I update my payment details?</strong></p>
                    <p>A: You can update your payment methods in the "Account Settings" section.</p>
                </div>

                <button className="btn btn-primary">Go to Account Settings</button>
            </div>
        </div>
    );
}

export default HelpCenter;
