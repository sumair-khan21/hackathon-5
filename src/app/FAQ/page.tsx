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
      {/* Heading Section */}
      <div className="heading">
        <h2>Questions Looks Here</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="faq-grid">
        {/* FAQ Item 1 */}
        <div className="faq-item">
          <div className="faq-header">
            <h3>How we serve food?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="faq-item">
          <div className="faq-header">
            <h3>How can we get in touch with you?</h3>
            <span className="toggle">—</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="faq-item">
          <div className="faq-header">
            <h3>How is our food quality?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="faq-item">
          <div className="faq-header">
            <h3>What will be delivered? And When?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="faq-item">
          <div className="faq-header">
            <h3>How do we give home delivery?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="faq-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis.
          </p>
        </div>

        {/* FAQ Item 6 */}
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
