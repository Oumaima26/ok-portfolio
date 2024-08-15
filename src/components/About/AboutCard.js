import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Kadri Oumaima </span>
            de <span className="purple"> Tunis.</span>
            <br />
            Je me spécialise dans le développement web full stack 
            (frontend + backend) et le développement mobile. 
            J'ai obtenu une Licence Fondamentale en Informatique
             à l'Institut Supérieur d’Informatique de Mahdia (ISIMa) 
             et un Master Professionnel en Génie Logiciel à l'Institut 
             Supérieur d'Informatique et de Mathématiques de Monastir (ISIMM).
            <br />
            J'ai eu l'opportunité de réaliser un stage de 5 mois chez YooDev-IT
             à Sousse, où j'ai travaillé sur une application web de gestion en 
             ligne pour PME avec le stack MERN. J'ai également effectué un stage
              de 8 mois pour mon projet de fin d'études de master, intitulé 
              "Conception et développement d'une application web pour le traitement
               d'imagerie médicale" au Laboratoire de Recherche en Technologie et 
               Imagerie Médicale de Monastir (LabTIM).
               <br/>
               Actuellement, en tant que chercheuse et développeuse full stack, 
            je travaille sur le développement d'un tableau de bord intégré 
            et interactif pour un système de détection, d'identification, 
            de suivi et de neutralisation des drones non autorisés au Centre 
            de Recherches Militaires de l’Aouina.
            <br />
            <br />
            En dehors de la programmation, voici quelques autres activités que j'adore :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Broderie
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de créer des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Oumaima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
