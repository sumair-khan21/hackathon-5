import React from 'react';
import "./about.css";
import Topbar from '@/app/components/topbar/page';
import Navbar from '@/app/components/navbar/page';
import Image from 'next/image';
import Footer from '@/app/components/footer/page';
const About = () => {
  return (
    <>
    <Navbar />
    <Topbar />
    <section>
     <div className="about-flex">
        <div className="about-imgs">
            <div className="about-cut1">
            <img className='img1' src="/about01.png" alt="" />
            </div>
            <div className="about-cut">
            <img className='img2' src="/about02.png" alt="" />
            <img className='img3' src="/about03.png" alt="" />
            </div>
        </div>
        <div className="about-ctns">
            <img src="/Line.png" alt="" />
            <h2>Food is an important part Of a balanced Diet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className="best-button">
             {/* <button>Read More</button> */}
             <img src="/Play.png" alt="" />
             <p >Play Video</p>
              </div>
        </div>
     </div>
    </section>
    <section>
        <div className="choose-center">
        <h2>Why Choose us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
        </div>
        <img className='choose-back' src="/choose-back.png" alt="" />
        <div className="about-icons-flex">
            <div className="student">
                <img src="/choose01.png" alt="" />
                <h4>Best Chef</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            <div className="coffee">
            <img src="/choose02.png" alt="" />
                <h4>120 Item food</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            <div className="chefs">
            <img src="/choose03.png" alt="" />
                <h4>Clean Environment</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
        </div>
    </section>
    <section>
        {/* <div className="member-main">
            <div className="member-back">
                <h2>Team Member</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue</p>
            </div>
        </div> */}



<section className="team-section">
      {/* Header */}
      <div className="team-header">
        <h2>Team Member</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Varius sed pharetra dictum neque malesuada congue.
        </p>
      </div>

      {/* Team Cards */}
      <div className="team-container">
        {/* Team Card 1 */}
        <div className="team-card">
          <div className="team-img">
          <Image src="/checf-member.png" alt="Team Member" width={250} height={300} />
            <div className="team-socials">
              <a href="#">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/pin.png" alt="Instagram" width={30} height={30} />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Mark Henry</h3>
            <p>Owner</p>
          </div>
        </div>

        {/* Repeat for other cards */}
        <div className="team-card">
          <div className="team-img">
          <Image src="/checf-member.png" alt="Team Member" width={250} height={300} />

            <div className="team-socials">
              <a href="#">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />

              </a>
              <a href="#">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/pin.png" alt="Instagram" width={30} height={30} />

              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Lucky Helen</h3>
            <p>Chef</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-img">
          <Image src="/checf-member.png" alt="Team Member" width={250} height={300} />

            <div className="team-socials">
              <a href="#">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/pin.png" alt="Instagram" width={30} height={30} />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Moon Henry</h3>
            <p>Founder</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-img">
          <Image src="/checf-member.png" alt="Team Member" width={250} height={300} />
            <div className="team-socials">
              <a href="#">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
              </a>
              <a href="#">
              <Image src="/pin.png" alt="Instagram" width={30} height={30} />
              </a>
            </div>
          </div>
          <div className="team-info">
            <h3>Tom Monrow</h3>
            <p>Specialist</p>
          </div>
        </div>
      </div>
    </section>
    </section>


    <section className='testimonial-main'>
   <div className="testimonial-logo">
    <img src="/Testimonials.png" alt="" />
    <h1>What our client are saying</h1>
   </div>
   <div className="testimonial-div">
    <img className='man' src="/man.png" alt="" />
    <img className='Quotes' src="/Quotes.png" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <img className='star' src="/star.png" alt="" />
    <div>
    <b>Alamin Hasan</b>
    </div>
    <p className='Food'>Food Specialist</p>
   </div>
   <div>
    <img className='m-auto mt-5' src="/Dot.png" alt="" />
   </div>
</section>
{/* --------------------------------------------------------------------------- */}
<div className="pick1">
        <h1>Our Food Menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
    </div>
    <div className="pick-icons">
        <p>Breakfast</p>
        <p>Lunch</p>
        <p>Dinner</p>
        <p>Dessert</p>
        <p>Drink</p>
        <p>Snack</p>
        <p>Suops</p>
    </div>
<div className="pick2">
<div className="menu-ctn">
      <div className="dollar">
      <h4 id='oranges'>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
    </div>
    <div className="menu-ctn">
      <div className="dollar">
      <h4 >Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
      <div className="dollar">
      <h4>Alder Grilled Chinook Salmon</h4>
        <p id='hehe'>32$</p>
      </div>
      <h5>Toasted French bread topped with romano, cheddar</h5>
      <p>560 CAL</p>
    </div>
</div>
<div className="about-button">
  <button>View Menu</button>
</div>
<Footer />
    </>
  )
}

export default About
