# Portfolio README

## Beschreibung

Das Portfolio zeigt meine Fähigkeiten in Webentwicklung, Design und Projektmanagement. Es besteht aus verschiedenen Kacheln, die unterschiedliche Inhalte anbieten.

![alt Skizze](vite-project/portfolio_skizze.png)

## Projektplanung

- **Thema**: Portfolio mit unterschiedlichen Kacheln
- **Zielgruppe**: Arbeitgeber, Kunden und andere Interessierte, die meine Arbeiten sehen möchten.

## Projekte

- **Herausforderung**: Die Projekte sind derzeit lokal oder in öffentlichen GitHub-Repositories gespeichert und können nicht extern verlinkt werden.
- **mögliche Lösungsstrategien**:
  - **Git-Submodule**: Verwenden von Git-Submodulen, um Projekte als separate Repositories zu verwalten.
  - **Lokale Einbindung**: Projekte lokal speichern und in die Portfolio-Komponenten importieren.
  - **GitHub Pages**: Separate GitHub-Seiten für jedes Projekt erstellen, um sie online zu präsentieren.
  - **Monorepo-Ansatz**: Nutzung eines Monorepo-Ansatzes, um alle Projekte in einem Repository zu verwalten.
  - **Dokumentation**: Erstellung einer Dokumentation mit Links zu den GitHub-Repositories und Anweisungen zur lokalen Ausführung der Projekte.

## Technologiestack

- **Frontend**: React, React Router
- **State Management**: Context API (oder Redux, je nach Bedarf)
- **Backend**: Keine Backend-Integration erforderlich, es sei denn, du möchtest dynamische Inhalte.

## Design und Benutzeroberfläche

- **Wireframes**: [Links zu Wireframes oder Skizzen]
- **UI-Bibliotheken**: Material-UI oder CSS-Frameworks wie Bootstrap für das Grid-Layout

  - **mögliche Framworks**

    1.  Tailwind CSS\_
        Beschreibung: Ein utility-first CSS-Framework, das es dir ermöglicht, Designs direkt in deinen HTML-Klassen zu erstellen.
        Vorteile:
        Hohe Flexibilität und Anpassungsfähigkeit.
        Geringe Größe des endgültigen CSS, da nur die verwendeten Klassen generiert werden.
        Große Community und viele Plugins verfügbar.

    2.  Bulma
        Beschreibung: Ein modernes CSS-Framework, das auf Flexbox basiert und einfach zu verwenden ist.
        Vorteile:
        Saubere und klare Syntax.
        Responsive Design ohne JavaScript.
        Gut dokumentiert mit vielen Beispielen.

    3.  Foundation
        Beschreibung: Ein leistungsstarkes responsives Frontend-Framework, das von ZURB entwickelt wurde.
        Vorteile:
        Flexibles Grid-System und viele vorgefertigte Komponenten.
        Unterstützung für Accessibility und Mobile-First-Ansatz.
        Anpassbare und modulare Struktur.

    4.  Semantic UI
        Beschreibung: Ein Framework, das sich auf die Semantik von HTML konzentriert und eine intuitive Syntax bietet.
        Vorteile:
        Klare und lesbare Klassen, die den Zweck der Elemente widerspiegeln.
        Viele vorgefertigte Themen und Anpassungsoptionen.
        Integration mit JavaScript-Frameworks wie React und Angular.

    5.  Milligram
        Beschreibung: Ein minimalistisches CSS-Framework, das eine einfache und schnelle Basis für Projekte bietet.
        Vorteile:
        Sehr leichtgewichtig (unter 2KB).
        Schneller Einstieg ohne viel Overhead.
        Gut für kleine Projekte oder Prototypen.

    6.  Pure.css
        Beschreibung: Ein leichtgewichtiges CSS-Framework von Yahoo, das nur die grundlegenden Stile bereitstellt.
        Vorteile:
        Modularer Aufbau, sodass du nur die benötigten Module einbinden kannst.
        Ideal für Projekte, bei denen du die Kontrolle über das Design behalten möchtest.

_Unterstütz durch Blackbox AI_

- **Responsive Design**: Für verschiedene Bildschirmgrößen und Geräte
- **Benutzerfreundlichkeit**: Benutzerfreundliche Navigation und leicht zugängliche Inhalt
- **Farbschema**: Einheitliches Farbschema für die gesamte Anwendung verwendete Farbcodes:

## Entwicklung

- **Komponenten**:
  - **Projekt-Kachel**:
    - **Beschreibung**: Die Projekt-Kachel enthält eine Unterseite mit einem Carousel, das alte Projekte mit einer Galerie und einem Vorschaubild anzeigt.
    - **Carousel**:
      - **Beschreibung**: Das Carousel zeigt alte Projekte mit einer Galerie und einem Vorschaubild an.
      - **Funktionalität**: Die Projekte können durchgeklickt werden, um weitere Informationen zu erhalten.
  - **Contact-Kachel**:
    - **Beschreibung**: Die Contact-Kachel enthält ein Formular, mit dem Besucher Kontakt aufnehmen können.
  - **CV-Kachel**:
    - **Beschreibung**: Die CV-Kachel enthält Tabellen mit wichtigen Eckdaten zu meinem Lebenslauf und kleine Vorschaubilder von meinen Zeugnissen.
    - **Funktionalität**: Die Zeugnisse können separat geöffnet werden, wenn man sie anklickt.
  - **Grid-Komponente**: Steuert das Layout der Kacheln (2-1, 1-1, 1-1 in der ersten Reihe und 1-1, 1-1, 2-1 in der zweiten Reihe).
  - **MouseOver-Effekt für 2-1 Kacheln**:
    - **Beschreibung**: Die 2-1 Kacheln haben keinen Button-Effekt, aber beim Überfahren mit der Maus (MouseOver) vergrößern sie sich um ein paar REM.
  - **Sprachumschalter**:
    - **Beschreibung**: Ein Toggle-Switch ermöglicht die Auswahl zwischen Deutsch und Englisch. Der aktuelle Sprachstatus wird global verwaltet, sodass er in allen Komponenten verfügbar ist.
    - **Implementierung**:
      - Ein `LanguageToggle`-Komponente wird erstellt, um zwischen den Sprachen zu wechseln.
      - Der Zustand der Sprache wird mithilfe des Context API verwaltet, um die Sprache in der gesamten Anwendung zu teilen.
  - **Back to Home Button**:
    - **Beschreibung**: Ein Button, der es Benutzern ermöglicht, zur Hauptseite des Portfolios zurückzukehren.
    - **Implementierung**:
      - Der Button kann in den Projekt-Kacheln oder auf den Detailseiten platziert werden, um eine einfache Navigation zu gewährleisten.
      - Verwendung von React Router für die Navigation zurück zur Startseite.

## Dokumentation

- **README**: Diese Datei wird kontinuierlich aktualisiert, um die Entwicklung und Nutzung des Portfolios zu dokumentieren.

**Ordnerstruktur**

```
vite-project/
│
├── src/
│ ├── assets/
│ │ └── react.svg
│ │
│ ├── Components/
│ │ ├── Buttons/
│ │ │ ├── Back to Home.jsx
│ │ │ └── LanguageSwitch.jsx
│ │ │
│ │ ├── Carousel/
│ │ │ └── Carousel.jsx
│ │ │
│ │ └── Tiles/
│ │ ├── CVTile.jsx
│ │ ├── ContactTile.jsx
│ │ ├── AboutmeTile.jsx
│ │ ├── ProjectTile.jsx
│ │ ├── IconTile.jsx
│ │ └── MainTile.jsx
│ │
│ ├── Pages/
│ │ ├── Project.jsx
│ │ ├── Contact.jsx
│ │ ├── CV.jsx
│ │ └── Aboutme.jsx
│ │
│ ├── Styling/
│ │ └── Carousel.css
│ │
│ ├── utils/
│ │ ├── router.jsx
│ │ └── linksToProjects.js
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── public/
│ └── vite.svg
│
├── .gitignore
├── README.md
├── index.html
├── vite.config.js
└── eslint.config.js
```
