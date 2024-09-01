// src/components/Payment.js
import React from 'react';
import styled from 'styled-components';

const Payment = () => {
    const handlePayment = () => {
        const options = {
            key: 'rzp_test_n7oyecg5pQaOac', // Replace with your Razorpay key
            amount: 100, // Amount in paise (50000 paise = 500 INR)
            currency: 'INR',
            name: 'finance',
            description: 'Test Transaction',
            handler: function (response) {
                alert('Payment Success! Payment ID: ' + response.razorpay_payment_id);
                // Handle payment success here
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Hello World'
            },
            theme: {
                color: '#3399cc'
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <PaymentStyled>
            <button onClick={handlePayment}>Pay with Razorpay</button>
        </PaymentStyled>
    );
};

const PaymentStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width : 100vh;

    button {
        padding: 10px 20px;
        border: none;
        background-color: #3399cc;
        color: white;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #007bb5;
        }
    }
`;

export default Payment;
