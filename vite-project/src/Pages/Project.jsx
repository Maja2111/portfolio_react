/**
 * @description für Projects
 * der Language ToogleSwitch -> braucht auch ein eigenes Styling
 * es wird eine H1 mit Projekt/Projects geben -> Animation
 * hier entsteht ein Carousel mit Vorschaubildern der Altprojekte, diese sollen anklickbar sein und sich auf einer neuen Seite öffnen.
 * es soll weitere Infos zu dem Projekt geben, wenn man über das Bild mouseOver hat und einen onClick um das Projekt zu öffnen
 * Styling
 * es wird ein Styling für das Carousel und die Seite selbst gebraucht, diese werden nicht in der selben Datei sein, da das Styling für die Seiten einheitlich sein soll.
 * die Seite wird mit eine onClick von der Hauptseite verlinkt
 *  back to home button
 */

import React, { useState } from 'react';
import '../Styling/stylingPages/pagesStyling.css';
import '../Styling/stylingPages/projectPage.css';
import BackToHomeButton from '../Components/Buttons/BackToHome';
import LanguageSwitch from '../Components/Buttons/LanguageSwitch';
import Carousel from '../Components/Carousel/Carousel';
import { projects } from '../utils/projectData';

const Projects = ({ language }) => {
  // State für das aktuell ausgewählte Projekt
  const [selectedProject, setSelectedProject] = useState(null);

  // Funktion zum Rendern der Projektlinks basierend auf Projekttyp (GitHub oder lokal)
  const renderProjectLinks = (project) => {
    return (
      <div className="projectLinks">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            Live Demo
          </a>
        )}
      </div>
    );
  };
  return (
    <div className="projectsContainer">
      <header className="projectsHeader">
        <h1 className="animateTitle">
          {language === 'de' ? 'Projekte' : 'Projects'}
        </h1>
        <LanguageSwitch />
      </header>

      <main className="projectsMain">
        <Carousel projects={projects} onSelectProject={setSelectedProject} />

        {selectedProject && (
          <div className="projectDetails">
            <h2>{selectedProject.title}</h2>
            <p className="projectDescription">{selectedProject.description}</p>
            {renderProjectLinks(selectedProject)}
          </div>
        )}
      </main>

      <footer className="projectsFooter">
        <BackToHomeButton />
      </footer>
      {/**schließendes div projectsContainer */}
    </div>
  );
};
export default Projects;
