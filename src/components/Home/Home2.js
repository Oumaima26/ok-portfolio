import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pro.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">{t('introduce_myself')}</span>
            </h1>
            <p className="home-about-body">
              {t('fall_in_love_with_programming')}
              <br />
              <br />{t('classic_languages')}
              <i>
                <b className="purple"> {t('languages')} </b>
              </i>
              <br />
              <br />
              {t('domaines_interet')} &nbsp;
              <i>
                <b className="purple">{t('web_technologies')}, </b> {t('projects')}
                <b className="purple">
                  &nbsp;{t('geolocation')}
                </b>
                &nbsp;{t('et')} {" "}
                <b className="purple">
                  {t('real_time_visualization')}
                </b>
              </i>
              <br />
              <br />
              {t('apply_my_passion')}
              <b className="purple">&nbsp;Node.js</b> {t('ainsi_que')}
              <i>
                <b className="purple">
                  {" "}
                  {t('modern_frameworks')}
                </b>
              </i>
              &nbsp; {t('comme')}
              <i>
                <b className="purple"> {t('frameworks')}</b>
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
              {t('find_me_on')}
            </h1>
            <p>
              <span className="purple">{t('with_me')}</span>
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
