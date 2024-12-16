import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <>
      <section className="background-img">
        <div className="bg-color">
            
        <div className="hero-main">
          <div className="hero-ctn text-white">
            <p className='flex gap-2'>
            <span>Welcome to coffee hut </span>
            <img src="/heart.png" width="25px" alt="" />
            </p>
            <h1>Heal the world with coffee</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
            <button className='button1'>Order Now</button>
            <button className='button2'>See menu </button>
          </div>
          <div className="hero-img">
            <div className="boder">
            <img src="/hero-main.png" alt="" />
            </div>
          </div>
        </div>
        <div className='text-center'>

        <img  src="/commas.png" alt="" />
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
