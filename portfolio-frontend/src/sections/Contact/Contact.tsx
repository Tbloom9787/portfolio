import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className='contact-section text-center'>
      <div className='container'>
        <h1>Contact Me</h1>
        <form>
          <input type='text' className='form-control mb-3' placeholder='Name' />
          <input
            type='email'
            className='form-control mb-3'
            placeholder='Email'
          />
          <textarea
            className='form-control mb-3'
            placeholder='Message'
            rows={3}
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
