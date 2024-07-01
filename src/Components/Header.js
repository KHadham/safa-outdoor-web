import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = ({ data }) => {
  if (!data) return null;

  const { project, github, name, description } = data;

  const handleDownload = () => {
    // Replace with your image URL
    const pdfFile = 'pdf/pricelist.pdf';
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="home">
      <img src="images/home-banner.png" alt="background" className="background-image" />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
         
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3 >Beli is mahal, Sewa is Murah</h3>
            <h3 >{description}</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={project} className="button btn project-btn" onClick={(e) => handleDownload()}
              >
                <i className="fa fa-book"></i>Download Price List
              </a>
              <a href={'https://photos.app.goo.gl/EcbdASTf98MGxsYo9'} className="button btn github-btn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-camera"></i>Gallery
              </a>
              
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
