import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className="info-page">
      <h2>Info Page</h2>
      <div className="info-content">
        <section>
          <h3>About Us</h3>
          <p>
            This is the Info page where you can find detailed information about our company, 
            mission, and values. We are dedicated to providing quality services and information 
            to our clients.
          </p>
        </section>
        <section>
          <h3>Contact Information</h3>
          <p>
            You can reach us through various channels. Feel free to get in touch if you have 
            any questions or need assistance.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Info

