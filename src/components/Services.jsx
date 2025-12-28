import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <h2>Services Page</h2>
      <div className="services-content">
        <section className="service-item">
          <h3>Service 1</h3>
          <p>
            Description of the first service we offer. This service is designed to meet 
            your specific needs and requirements.
          </p>
        </section>
        <section className="service-item">
          <h3>Service 2</h3>
          <p>
            Description of the second service we offer. We provide comprehensive solutions 
            tailored to your business.
          </p>
        </section>
        <section className="service-item">
          <h3>Service 3</h3>
          <p>
            Description of the third service we offer. Our expert team is ready to assist 
            you with professional guidance.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Services

