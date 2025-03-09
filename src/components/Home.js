import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = event.target.email;
    if (emailInput.checkValidity()) {
      setShowSuccess(true);
      emailInput.value = '';
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Connecting Lawyers and Clients Seamlessly.</h1>
          <p>
            Find trusted legal professionals or new clients in one easy-to-use platform designed to streamline your experience.
          </p>
          <form className="email-form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email to stay updated" required />
            <button type="submit">Notify Me</button>
          </form>
          {showSuccess && (
            <div id="successMessage" className="success-message">
              Thank you! We'll be in touch.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;