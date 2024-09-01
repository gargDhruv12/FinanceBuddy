// src/components/Profile.js
import React from 'react';
import styled from 'styled-components';

// Example user data
const userData = {
    accountNumber: '******7890',
    name: 'FinanceBuddy',
    address: '123 Main Street, Sadar Bazar, Delhi, India',
    aadharNumber: '****-****-9012',
    userId: 'FinanceBuddy3019',
    //password: '**********', // Note: In a real application, never display passwords or store them in plaintext!
};

const Prof = () => {
    const { accountNumber, name, address, aadharNumber, userId, password } = userData;

    return (
        <ProfileStyled>
            <h1>Profile Information</h1>
            <div className="profile-info">
                <div className="info-item">
                    <label>Account Number:</label>
                    <p>{accountNumber}</p>
                </div>
                <div className="info-item">
                    <label>Name:</label>
                    <p>{name}</p>
                </div>
                <div className="info-item">
                    <label>Address:</label>
                    <p>{address}</p>
                </div>
                <div className="info-item">
                    <label>Aadhar Number:</label>
                    <p>{aadharNumber}</p>
                </div>
                <div className="info-item">
                    <label>User ID:</label>
                    <p>{userId}</p>
                </div>
                <div className="info-item">
                    <label>Password:</label>
                    <p>{password}</p>
                </div>
            </div>
        </ProfileStyled>
    );
}

const ProfileStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    h1 {
        margin-bottom: 20px;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    label {
        font-weight: bold;
        width: 150px;
    }

    p {
        margin: 0;
        color: #333;
    }
`;

export default Prof;
