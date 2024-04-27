import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  return (
    <div className='work-section text-center'>
      <div className='container'>
        <h1>My Work</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='/assets/images/whatsapp-clone-ui.png'
                className='card-img-top'
                alt='WhatsApp UI'
              />
              <div className='card-body'>
                <h5 className='card-title'>WhatsApp Clone</h5>
                <p className='card-text'>
                  WhatsApp Clone is a full-stack homage to the intuitive WhatsApp interface, this
                  application replicates real-time messaging using Pusher for
                  instant communication. Developed with the MERN stack, it
                  combines React for the frontend with Node.js, Express, and
                  MongoDB for backend operations, wrapped up with modern CSS3
                  for styling. Experience the familiar WhatsApp functionality in
                  a web app designed for immediate message exchange. 🔥
                </p>
                <a href='#' className='btn btn-primary'>
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='/assets/images/financial-tracker-ui.png'
                className='card-img-top'
                alt='Financial Tracker UI'
              />
              <div className='card-body'>
                <h5 className='card-title'>Financial Tracker</h5>
                <p className='card-text'>
                  Financial Tracker is a A dynamic financial dashboard providing
                  real-time insights into stocks, indices, and cryptocurrencies.
                  Leveraging Scrapy for data collection and Django REST for
                  backend operations, the application offers streamlined data
                  visualization with a focus on market trends via a
                  Plotly-powered candlestick chart. The frontend is crafted with
                  Vue.js and Vuetify for a responsive and interactive user
                  experience, while Celery manages background tasks to ensure
                  performance efficiency.
                </p>
                <a href='#' className='btn btn-primary'>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
