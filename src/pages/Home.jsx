import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../css/style.css'; 
import '../css/animation.css';
import myImg from '../assets/myimg.jpeg';
import { Link } from 'react-router-dom';
import myCV from '../assets/gowtham.pdf';


import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-image">
                <img
                  src={myImg}
                  alt="Gowtham"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="typing-text">
                Hi Synergech, I'm <span className="highlight">Gowtham</span>
              </h1>
              <div className="hero-description">
                <p>
                  A Techie with skills of{' '}
                  <span className="skill programming">PROGRAMMING</span>,{' '}
                  <span className="skill development">DEVELOPMENT</span> and{' '}
                  <span className="skill design">DESIGNING</span>
                </p>
                <p>
                  I develop creative and innovative solutions for the modern world
                </p>
              </div>
              <div className="hero-buttons">
              <Link to="/contact" className="btn btn-hire me-2">
                  Hire Me
              </Link>
                <a
                  href={myCV}
                  download
                  className="btn btn-download"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
