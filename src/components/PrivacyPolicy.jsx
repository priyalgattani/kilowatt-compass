import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center" style={{ fontFamily: "'Roboto', sans-serif", color: '#333' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Privacy Policy</h1>

                <div className="mb-5">
                    <h4>Introduction</h4>
                    <p>
                        Your privacy is extremely important to us. This Privacy Policy outlines the types of information that we collect, how we use it, and your rights regarding your personal data when you use our services. By using our services, you consent to the collection and use of your information in accordance with this policy.
                    </p>
                    <p>
                        We are committed to safeguarding your privacy and ensuring that your personal data is handled in a safe and responsible manner. This policy applies to all users who access our website, mobile applications, and related services.
                    </p>
                </div>

                <div className="mb-5">
                    <h4>Information We Collect</h4>
                    <p>
                        We collect several types of information to provide and improve our services. This includes:
                    </p>
                    <p>
                        <strong>Personal Information:</strong> When you sign up for an account or use our services, we may collect personal details such as your name, email address, phone number, and billing information. This allows us to offer you personalized services, communicate with you, and support your account.
                    </p>
                    <p>
                        <strong>Usage Data:</strong> We also collect information about how you interact with our services, such as your IP address, device type, browser type, operating system, and other diagnostic data. This helps us understand how our services are being used and allows us to improve the overall user experience.
                    </p>
                    <p>
                        <strong>Location Data:</strong> When using our mobile applications or services that involve maps and location-based features (e.g., finding nearby charging stations), we may collect information about your location. This helps us provide relevant, accurate results and improve your experience.
                    </p>
                    <p>
                        <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our services. These technologies help us analyze trends, track users' movements, and gather demographic information. You can control cookies through your browser settings.
                    </p>
                </div>

                <div className="mb-5">
                    <h4>How We Use Your Information</h4>
                    <p>
                        The information we collect is used for several purposes to provide you with a better experience, including:
                    </p>
                    <p>
                        We use your personal information to create and manage your account, communicate with you about updates, promotions, and new features, and to provide you with customer support.
                    </p>
                    <p>
                        We use usage data to analyze trends, monitor the performance of our services, and understand how users interact with our website or app. This helps us improve our features, fix issues, and enhance overall functionality.
                    </p>
                    <p>
                        Your location data helps us offer location-based services, such as providing you with a list of nearby charging stations or optimizing your trip planning based on your current location.
                    </p>
                    <p>
                        We may also use your data to send marketing communications if you have opted in to receive them. You can always opt-out of receiving marketing communications at any time by updating your preferences in the "Account Settings."
                    </p>
                </div>

                <div className="mb-5">
                    <h4>Your Rights</h4>
                    <p>
                        As a user, you have several rights regarding your personal information:
                    </p>
                    <p>
                        <strong>Access:</strong> You have the right to request access to the personal data we hold about you. This includes the ability to request a copy of the information we have on file and how it is being used.
                    </p>
                    <p>
                        <strong>Correction:</strong> If you believe the information we hold about you is incorrect or incomplete, you have the right to request that it be corrected or updated.
                    </p>
                    <p>
                        <strong>Deletion:</strong> You can request that we delete your personal data, subject to certain legal obligations that may require us to retain some data (e.g., for financial reporting or legal compliance).
                    </p>
                    <p>
                        <strong>Withdrawal of Consent:</strong> If we are processing your data based on your consent, you can withdraw that consent at any time. This may affect your ability to use certain features of our services.
                    </p>
                    <p>
                        <strong>Opt-out of Marketing:</strong> You can opt-out of receiving marketing communications at any time by following the unsubscribe instructions provided in the emails or by adjusting your communication preferences in your account settings.
                    </p>
                </div>

                <div className="mb-5">
                    <h4>How We Protect Your Information</h4>
                    <p>
                        We employ industry-standard security measures to protect your personal data from unauthorized access, use, alteration, or disclosure. This includes the use of encryption, secure servers, and regular security assessments to maintain the safety of your information.
                    </p>
                    <p>
                        However, no method of data transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
                    </p>
                </div>

                <div className="mb-5">
                    <h4>Changes to This Privacy Policy</h4>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date" at the top of the policy. We encourage you to review this policy periodically to stay informed about how we protect your personal information.
                    </p>
                    <p>
                        If you continue to use our services after any changes to this policy, it will be considered as your acceptance of those changes.
                    </p>
                </div>

                <div className="mb-5">
                    <h4>Contact Us</h4>
                    <p>
                        If you have any questions or concerns about our Privacy Policy or how we handle your personal data, please contact us at <strong>privacy@example.com</strong>.
                    </p>
                </div>

                <button className="btn btn-primary">Back to Home</button>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
