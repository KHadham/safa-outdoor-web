import React, { Component } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p>{work.description}</p>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {work.photos.map((photo) => {
              return (
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <PhotoView src={photo.image}>
                      <img src={photo.image} alt={photo.title} />
                    </PhotoView>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Event & Testimoni</span>
              </h1>
              <br />
            </div>
            <PhotoProvider>
              <div className="twelve columns main-col">{work}</div>
            </PhotoProvider>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
