import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';  // Importation de useTranslation

function Github() {
  const { t } = useTranslation();  // Utilisation de useTranslation

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong className="purple"> {t('Jours')}</strong>
      </h1>
      <GitHubCalendar
        username="Oumaima26"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
