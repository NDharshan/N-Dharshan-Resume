import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaDochub } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="special"> ME </span> 
            </h1>
            <p className="home-about-body">
              I'm a Final-year student pursuing engineering from Global Academy of Technology in Computer Science 
              and Engineering. Inter-disciplinary research interests me. I aspire to work on the Amalgamation of 
              Technology and Biological sciences to create a homogeneous system to aid research and diagnosis.
              <br /><br />

              I am fluent in classics like

              <i> <b className="special"> C, Python, Javascript and Java. </b> </i>
              <br /><br />

              My field of Interest's are building new &nbsp;
              <i>
                <b className="special">Web Technologies and Products </b> 
                and also in areas related to{" "}
                <b className="special"> Data Analytics </b> & <b className="special">Blockchain </b>
              </i>
              <br /> <br />

              I bring a versatile skill set to the table, including <b className="special">strong teamwork, effective leadership, 
              active involvement, creative thinking,</b> and <b className="special">resourcefulness</b>, enhancing my value in various roles.
              <br /> <br />

              <br /> <br />
              <h1 style={{ fontSize: "1.6em" }}>
                Honours & <span className="special"> Awards </span> 
              </h1>

                <ul className="home-about-body">
                  <li> <b className="special">Second Runner</b> up in Fantom-Code, RVITM (2023) </li>
                  <li> <b className="special">Second Place</b> at Bytefest 2.0, Global Academy of Technology (2022) </li>
                  <li> <b className="special">Top 4 Project</b> at Hackerrupt, VVCE, Mysuru (2022) </li>
                  <li> <b className="special">Second place</b> in Hackbites 2.0, Global Academy of Technology (2022) </li>
                  <li> <b className="special">First place</b> in ByteFest, Global Academy of Technology (2020) </li>
                </ul>
                <br /> <br />
                
              <h1 style={{ fontSize: "1.6em" }}>
                <span> {"\t"}  </span>Cert<span className="special">ifications</span> 
              </h1>

                <ul className="home-about-body">
                  <li> <b className="special">Silver Elite</b> , Data Science for Engineers, IIT Madras </li>
                  <li> <b className="special">Blockchain</b> and its Applications,  IIT Kharagpur  </li>
                  <li> <b className="special">Social</b> Networks,  IIT Ropar </li>
                  <li> <b className="special">Intro</b> Machine Learning, Kaggle </li>
                  <li> <b className="special">Pandas</b> , Kaggle </li>
                  <li> <b className="special">Responsive Web Design</b> , FreeCodeCamp </li>                  
                </ul>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={{ color: "black" }}>
            <h1>Tech Presence</h1>
            <p>
              Feel free to <span className="special">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ndharshan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://devfolio.co/@NDharshan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDochub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/n-dharshan-651434230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
