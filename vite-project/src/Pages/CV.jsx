/**
 * @description für CV page
 * der Language ToogleSwitch -> braucht auch ein eigenes Styling
 * h1 mit Lebenslauf und Animation
 * h2 Ausbildung
 * Tabelle für Ausbildung
 * 4 x 4 reihen und spalten
 * Abschluss, Institution,  Zeitraum, PDF als vorschaulbild zum anklicken
 *
 * h2 berufserfahrung
 * 9 x 4  reihen und spalten
 * position , Unternehmen, Zeitraum, PDF als vorschaulbild zum anklicken
 * back to home Button
 */

import React from 'react';
import '../Styling/stylingPages/pagesStyling.css';
import '../Styling/stylingPages/cvPage.css';
import BackToHomeButton from '../Components/Buttons/BackToHome';
import { useLanguage } from '../Components/Language/LanguageContext';
import LanguageSwitch from '../Components/Language/LanguageSwitch';

const CV = () => {
  const { language } = useLanguage();
  {
    /**Objekt für die Tabellendaten  */
  }
  const educationData = [
    //Tabelle für die Ausbildung
    {
      degree: 'Software Entwicklerin MERN Dev',
      institution: 'DCI Digital Career Institute',
      period: '07/2025',
      pdf: './Images/Zertifikat_Weber, Sabine_MAT TZ 23-D03.pdf',
      img: 'Images/DCI.png',
    },
    {
      degree: 'Bachelor of Arts, Angewandte Medien',
      institution: 'EMBA / HS Mittweida',
      period: '02/2017',
      pdf: './Images/Bachelorurkunde.pdf',
      img: 'Images/BA.png',
    },
    {
      degree: 'staatlich anerkannte Erzieherin',
      institution: 'DBI Johannes Falk',
      period: '08/2011',
      pdf: './Images/Erzieherzeugnis.pdf',
      img: 'Images/DBI.png',
    },
  ];
  const workExperienceData = [
    //Tabelle für Arbeitserfahrungen
    {
      position: 'berufliche Neuorientierung',
      company: 'Argentur für Arbeit',
      period: '05/2023 - 11/2023',
    },
    {
      position: 'Sales Coordinator',
      company: 'Hummel Sportsware',
      period: '04/2023',
    },
    {
      position: 'Customer Service Agent',
      company: 'KMK kinderzimmer GmbH',
      period: '11/2022 - 03/2023',
      pdf: './Images/Zwischenzeugnis_CustomerSupport.pdf',
      img: './Images/KMK CS.png',
    },
    {
      position: 'Kitaleitung',
      company: 'KMK kinderzimmer Valentinshof GmbH',
      period: '04/2021 - 10/2022',
      pdf: './Images/ZwischenzeugnisVH.pdf',
      img: './Images/KMK VH.png',
    },
    {
      position: 'Erzieherin und stellvertretende Kitaleitung',
      company: 'KMK kinderzimmer Lohsepark GmbH',
      period: '05/2018 - 03/2021',
      pdf: './Images/ZwischenzeugnisLP.pdf',
      img: '../Images/KMK LP.png',
    },
    {
      position: 'Elternzeit',
      company: '',
      period: '04/2017 - 04/2018',
    },
    {
      position: 'Erzieherin',
      company: 'Kinderforum Hamburg',
      period: '08/2013 - 03/2017',
      pdf: './Images/ArbeitszeugnisKinderforum.pdf',
      img: '../Images/AZ-Kinderforum.png',
    },
    {
      position: 'Erzieherin',
      company: '3.staatliche Grundschule Eisenach',
      period: '08/2011 - 07/2013',
    },
  ];
  /**parameter für daten, Kopfzeile und die Sprachwahl */
  const renderTable = (data, headers, isEducation) => (
    <table>
      <caption>
        {language === 'de'
          ? isEducation
            ? 'Ausbildungen'
            : 'Beruflicher Werdegang'
          : isEducation
          ? 'Education'
          : 'Professional Experience'}
      </caption>
      <thead>
        <tr>
          {/**mapt über die Kopfzeile  und gibt die Überschriften aus */}
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/**mapt über die Daten und gibt die Zeilen aus */}
        {data.map((item, index) => (
          <tr key={index}>
            {/**mapt über die Daten und gibt die Abschlüsse und die Position aus */}
            <td>{isEducation ? item.degree : item.position}</td>{' '}
            {/* instution oder  company */}
            <td>{isEducation ? item.institution : item.company}</td>
            {/**Zeitraum */}
            <td>{item.period}</td>
            {item.pdf && (
              <td>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  <img
                    className="preview"
                    src={item.img}
                    alt={isEducation ? 'Zertifikat' : 'Arbeitszeugnis'}
                  />
                </a>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div className="cvContainer tilesmall">
      <header className="cvHeader">
        <h1 className="animateTitle">
          {language === 'de' ? 'Lebenslauf' : 'Curriculum Vitae'}
        </h1>
        <LanguageSwitch />
      </header>
      <main>
        {renderTable(
          educationData,
          language === 'de'
            ? ['Abschluss', 'Institution', 'Zeitraum', 'Zertifikat']
            : ['Degree', 'Institution', 'Completion Date', 'Certificate'],
          true
        )}
        {renderTable(
          workExperienceData,
          language === 'de'
            ? ['Position', 'Arbeitgeber', 'Zeitraum', 'Zeugnis']
            : ['Position', 'Company', 'Period', 'Certificate'],
          false
        )}
      </main>
      <footer>
        <BackToHomeButton />
      </footer>
    </div>
  );
};
export default CV;
