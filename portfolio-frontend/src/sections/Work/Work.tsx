import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Work.css';

const Work: React.FC = () => {
  return (
    <Container
      id='work'
      fluid
      className='work-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'
    >
      <Row>
        <Col xs={12}>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className='justify-content-center mt-4'>
        <Col md={6} lg={4} className='mb-4'>
          <Card>
            <Card.Img
              variant='top'
              src='/assets/images/whatsapp-clone-ui.png'
              alt='WhatsApp UI'
              loading='lazy'
            />
            <Card.Body>
              <Card.Title>WhatsApp Clone</Card.Title>
              <Card.Text>
                WhatsApp Clone is a full-stack homage to the intuitive WhatsApp
                interface, this application replicates real-time messaging using
                Pusher for instant communication. Developed with the MERN stack,
                it combines React for the frontend with Node.js, Express, and
                MongoDB for backend operations, wrapped up with modern CSS3 for
                styling. Experience the familiar WhatsApp functionality in a web
                app designed for immediate message exchange. 🔥
              </Card.Text>
              <Button
                variant='primary'
                onClick={() =>
                  window.open(
                    'https://github.com/Tbloom9787/whatsapp-clone',
                    '_blank'
                  )
                }
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className='mb-4'>
          <Card>
            <Card.Img
              variant='top'
              src='/assets/images/financial-tracker-ui.png'
              alt='Financial Tracker UI'
              loading='lazy'
            />
            <Card.Body>
              <Card.Title>Financial Tracker</Card.Title>
              <Card.Text>
                Financial Tracker is a dynamic financial dashboard providing
                real-time insights into stocks, indices, and cryptocurrencies.
                Leveraging Scrapy for data collection and Django REST for
                backend operations, the application offers streamlined data
                visualization with a focus on market trends via a Plotly-powered
                candlestick chart. The frontend is crafted with Vue.js and
                Vuetify for a responsive and interactive user experience, while
                Celery manages background tasks to ensure performance
                efficiency.
              </Card.Text>
              <Button
                variant='primary'
                onClick={() =>
                  window.open(
                    'https://github.com/Tbloom9787/financial-tracker',
                    '_blank'
                  )
                }
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
