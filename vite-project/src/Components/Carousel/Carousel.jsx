import React from 'react';
import '../../Styling/carousel.css';

const Carousel = ({ projects, onSelectProject }) => {
  return (
    <div className="carousel">
      {projects.map((project) => (
        <div
          key={project.id}
          className="carouselItem"
          onClick={() => onSelectProject(project)}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
