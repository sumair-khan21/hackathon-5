import React from 'react'
import "./faq.css"
import Navbar from '../components/navbar/page'
import Topbar from '../components/topbar/page'
import Footer from '../components/footer/page'
const FAQ = () => {
  return (
    <>
    <Navbar/>
    <Topbar />
    <div className="container">
      <div className="heading">
        <h2>Questions Looks Here</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>
      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-header">
            <h3>How we serve food?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <h3>How can we get in touch with you?</h3>
            <span className="toggle">—</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3>How is our food quality?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3>What will be delivered? And When?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3>How do we give home delivery?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-header">
            <h3>Is this restaurant 24 hours open?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default FAQ
