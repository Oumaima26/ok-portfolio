import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pro.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis tombée amoureuse de la programmation, et j'ai au moins appris
              quelques petites choses, je crois... 🤷‍♂️
              <br />
              <br />Je maîtrise des langages classiques comme
              <i>
                <b className="purple"> Java, JavaScript, et Python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles &nbsp;
              <i>
                <b className="purple">technologies web et de produits, </b> ainsi
                que des projets liés à
                <b className="purple">
                  la géolocalisation
                </b>
                et à {" "}
                <b className="purple">
                  la visualisation en temps réel.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j'applique également ma passion pour le développement de produits avec
              <b className="purple">Node.js</b> ainsi que
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques et frameworks JavaScript modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js, Django, et Leaflet.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              TROUVEZ-MOI SUR
            </h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Oumaima26"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oumaima-kadri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/may.ma.52090008"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
