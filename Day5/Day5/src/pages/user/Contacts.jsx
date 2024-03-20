import React from 'react';
import '../../assets/css/Contacts.css';
import Header from "./Header";

function Contact() {
  const handleContactUs = () => {
    window.location.href = 'rajeerajee428@example.com';
  };

  return (
    <div className='view'>
        <Header></Header>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to contact us!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
      <button className="email-button" onClick={handleContactUs}>Contact Us via Email</button>
    </div>
    </div>
  );
}

export default Contact;
