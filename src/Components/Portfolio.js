import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
              <PhotoView src={projectImage}>
              <img alt={projects.title} src={projectImage} />
              </PhotoView>
              <div style={{ textAlign: "center" }}>{projects.title}</div>

          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Daftar barang yang bisa di sewa di Safa Outdoor</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <PhotoProvider>
                {projects}
              </PhotoProvider>

              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
