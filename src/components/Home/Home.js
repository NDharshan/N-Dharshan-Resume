import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="main-backgound" >
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>

            <Col md={6} style={{ paddingBottom: 10 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "1050px" }}
              />
            </Col>

            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: 8 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> N. Dharshan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
          <Home2 />
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
