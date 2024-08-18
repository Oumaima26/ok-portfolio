import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medzone from "../../Assets/Projects/medzone.png";
import hannibalADS from "../../Assets/Projects/hannibalADS.png";
import ohif from "../../Assets/Projects/ohif.png";
import facture from "../../Assets/Projects/facture.png";
import khawarizmi from "../../Assets/Projects/khawarizmi.png";
import score from "../../Assets/Projects/score.png";
import { useTranslation } from 'react-i18next';  // Importation de useTranslation

function Projects() {
  const { t } = useTranslation();  // Utilisation de useTranslation

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">{t('Travaux')}</strong> 
        </h1>
        <p style={{ color: "white" }}>
           {t('Voici')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hannibalADS}
              isBlog={false}
              title="hannibalADS"
              description={t('hannibalADS')}
            // ghLink="https://github.com/Oumaima26/Alkhawarizmi_frontend"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={khawarizmi}
              isBlog={false}
              title="Alkhawarizmi"
              description={t('Alkhawarizmi')}
              ghLink="https://github.com/Oumaima26/Alkhawarizmi_frontend"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medzone}
              isBlog={false}
              title="Medzone"
              description={t('Medzone')}
              ghLink="https://github.com/Oumaima26/medzone"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohif}
              isBlog={false}
              title="OHIF"
              description={t('OHIF')}
              ghLink="https://github.com/OHIF/Viewers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={score}
              isBlog={false}
              title="Score-Bac"
              description={t('Score-Bac')}
              ghLink="https://github.com/Oumaima26/scorebac"
              demoLink="https://scorebac.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facture}
              isBlog={false}
              title="Facture.tn"
              description={t('Facture.tn')}
              ghLink="https://github.com/Oumaima26/Facture.tn"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
