import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../pages/css/Premium.css'; // Make sure to adjust the path if needed
import Footer from '../components/Footer';

const Premium = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBackClick = () => {
    navigate('/podcast'); // Change '/podcast' to the correct path for Podcast.jsx
  };

  return (
    <div className="checkout-panel">
      <div className="panel-body">
        <h2 className="title">Checkout here!</h2>
        <h2 className='title'>We are currently out of service..We'll reach you soon :(</h2>
        <h2 className='title'>Until then try accessing our free books and Podcasts.</h2>

        {/* <div className="progress-bar">
          <div className="step active"></div>
          <div className="step active"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div> */}

        <div className="payment-method">
          <label htmlFor="card" className="method card">
            <div className="card-logos">
              <img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png" alt="Visa Logo"/>
              <img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png" alt="MasterCard Logo"/>
            </div>

            <div className="radio-input">
              <input id="card" type="radio" name="payment"/>
              Pay AU$20.99 with credit card
            </div>
          </label>

          <label htmlFor="paypal" className="method paypal">
            <img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png" alt="PayPal Logo"/>
            <div className="radio-input">
              <input id="paypal" type="radio" name="payment"/>
              Pay AU$20.99 with PayPal
            </div>
          </label>
        </div>

        <div className="input-fields">
          <div className="column-1">
            <label htmlFor="cardholder">Name</label>
            <input type="text" id="cardholder"/>

            <div className="small-inputs">
              <div>
                <label htmlFor="date">Valid date</label>
                <input type="text" id="date"/>
              </div>

              <div>
                <label htmlFor="verification">CVV / CVC *</label>
                <input type="password" id="verification"/>
              </div>
            </div>
          </div>

          <div className="column-2">
            <label htmlFor="cardnumber">Card Number</label>
            <input type="password" id="cardnumber"/>

            <span className="info">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
          </div>
        </div>
      </div>

      <div className="panel-footer">
        <button className="btn back-btn" onClick={handleBackClick}>Back</button>
        <button className="btn next-btn">Make Payment</button>
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default Premium;
