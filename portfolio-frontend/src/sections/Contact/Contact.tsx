import React, { useState, FormEvent } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Toast,
  ToastContainer,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPen,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/common/Footer/Footer';
import './Contact.css';

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(false);
      return;
    }

    const formData = new FormData(form);
    const data = {
      toAddresses: ['tylerbloom9787@gmail.com'],
      subject: `Message from ${formData.get('name')}`,
      bodyText: `You have received a message from ${formData.get(
        'name'
      )} (${formData.get('email')}):\n\n${formData.get('message')}`,
      sourceEmail: 'contact@tylerbloom.io',
    };

    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setToastMessage(responseData.message || 'Message sent!');
        setShowToast(true);
        form.reset();
        setValidated(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setToastMessage('Failed to send message. Please try again.');
        setShowToast(true);
        form.reset();
        setValidated(false);
      });

    setValidated(true);
  };

  return (
    <Container
      id='contact'
      fluid
      className='contact-section min-vh-100 d-flex align-items-center justify-content-center'
    >
      <div className='content-area'>
        <Row>
          <Col xs={12}>
            <h1 className='text-center'>Contact</h1>
          </Col>
        </Row>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className='contact-form mt-3'
        >
          <Form.Group className='mb-3'>
            <FontAwesomeIcon icon={faUser} className='input-icon' />
            <Form.Control type='text' name='name' placeholder='Name' required />
            <Form.Control.Feedback type='invalid'>
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <FontAwesomeIcon icon={faEnvelope} className='input-icon' />
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Email'
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <FontAwesomeIcon icon={faPen} className='input-icon' />
            <Form.Control
              as='textarea'
              rows={3}
              name='message'
              placeholder='Message'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your message.
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col xs={12} className='text-center mt-3'>
              <Button
                variant='primary'
                type='submit'
                className='contact-button'
              >
                Send Message
              </Button>
              <div className='email-direct'>
                <Button
                  variant='link'
                  href='mailto:tylerbloom9787@gmail.com'
                  className='email-link'
                >
                  Or email me directly
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <Footer />
      <ToastContainer position='top-end' className='p-3'>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg='success'
        >
          <Toast.Header>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className='me-2'
              style={{ color: 'white' }}
            />
            <strong className='me-auto' style={{ color: 'white' }}>
              Success
            </strong>
          </Toast.Header>
          <Toast.Body style={{ color: 'white' }}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Contact;
