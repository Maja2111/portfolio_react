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
import '../Styling/pagesStyling.css';
import BackToHomeButton from '../Components/Buttons/BackToHome';
import LanguageSwitch from '../Components/Buttons/LanguageSwitch';
import Carousel from '../Components/Carousel/Carousel';
import { projects } from '../utils/projectData';

const Projects = ({ language }) => {
  // State für das aktuell ausgewählte Projekt
  const [selectedProject, setSelectedProject] = useState(null);

  // Funktion zum Rendern der Projektlinks basierend auf Projekttyp (GitHub oder lokal)
  const renderProjectLinks = (project) => {
    if (project.githubLink) {
      // Für GitHub-Projekte
      return (
        <>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'de' ? 'GitHub Repository' : 'GitHub Repository'}
          </a>
          {project.demoLink && (
            // Zeige Demo-Link nur an, wenn verfügbar
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'de' ? 'Live Demo' : 'Live Demo'}
            </a>
          )}
        </>
      );
    } else if (project.localPath) {
      // Für lokale Projekte
      return (
        <>
          <p>{language === 'de' ? 'Lokales Projekt' : 'Local Project'}</p>
          {project.documentationLink && (
            // Zeige Dokumentations-Link nur an, wenn verfügbar
            <a
              href={project.documentationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'de' ? 'Dokumentation' : 'Documentation'}
            </a>
          )}
        </>
      );
    }
  };

  return (
    <div className="projectsContainer">
      <header>
        {/* Animierter Titel mit Sprachunterstützung */}
        <h1 className="animateTitle">
          {language === 'de' ? 'Projekte' : 'Projects'}
        </h1>
        <LanguageSwitch />
      </header>
      <main>
        {/* Carousel-Komponente mit Projekten und Callback für Projektauswahl */}
        <Carousel projects={projects} onSelectProject={setSelectedProject} />
        {selectedProject && (
          // Zeige Projektdetails nur an, wenn ein Projekt ausgewählt wurde
          <div className="projectDetails">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            {/* Render Projektlinks basierend auf Projekttyp */}
            {renderProjectLinks(selectedProject)}
          </div>
        )}
      </main>
      <footer>
        <BackToHomeButton />
      </footer>
    </div>
  );
};

export default Projects;
