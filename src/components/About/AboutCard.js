import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';  // Importation de useTranslation

function AboutCard() {
  const { t } = useTranslation();  // Utilisation de useTranslation

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p >
          {t('Bonjour')} <span className="purple">{t('Oumaima Kadri')}</span>&nbsp;{t('de')}
            <span className="purple"> {t('Tunis')}</span>
            <br />
            {t('spécialise')}
            <br />
            {t('opportunité')}
               <br/>
               {t('Actuellement')}
            <br />
            <br />
            {t('dehors')} 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />{t('Broderie')} 
            </li>
            <li className="about-activity">
              <ImPointRight />{t('Voyages')} 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('Efforcez')}"{" "}
          </p>
          <footer className="blockquote-footer">{t('Oumaima Kadri')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
