import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ecoStubbleAI from "../../Assets/Projects/EcoStubbleAI.png";
import blockchainMedical from "../../Assets/Projects/medical-consultation.jpg";
import whatDoYouReckon from "../../Assets/Projects/wdyr.jpg";
import inheritanceChain from "../../Assets/Projects/InheritanceChain.jpg";
import eventManagement from "../../Assets/Projects/EventManagement.jpeg";
import iNeuronBlindNavigation from "../../Assets/Projects/iNeuron-Blind-Navigation.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="special">Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently. Check out GitHub for the exhaustive list
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoStubbleAI}
              isBlog={false}
              title="EcoStubbleAI"
              description="EcoStubbleAI is an innovative project addressing the critical issue of stubble 
                  burning in the Delhi and Punjab regions, leading to harmful smog and environmental concerns. 
                  Our solution harnesses the power of AI to provide an efficient and cost-effective method for 
                  stubble disposal. "
              ghLink="https://github.com/NDharshan/EcoStubbleAI"
              demoLink="https://colab.research.google.com/drive/1F0AdS4Isq6826HkZcV8F5YUr-E6diO8q?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inheritanceChain}
              isBlog={false}
              title="InheritanceChain"
              description="This project attempts to create a system which would bring in an order to the process
               of transfer of CryptoCurrency to the surviving benificiaries of the deceased. The system of will 
               and testament is non-existant in the crypto-currency world and given the anonymity and decentralized
                nature of the organization the system of asset-transfer is great concern. This was built during the 
                FantomCode at RVITM May-2023 winning as Second Runner Up"
              ghLink="https://github.com/NDharshan/RIP_Engineers_FC36"
              demoLink="https://github.com/NDharshan/RIP_Engineers_FC36"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNeuronBlindNavigation}
              isBlog={false}
              title="iNeuron-Blind-Navigation"
              description="This project attempts to create a system which would bring in added ease to the visually
               impaired, through our nagivation, obstacle-detection, obstacle distance identification and 
               speech-driven system to seamlessly integrate applications like Ola, Uber, etc. This was built during 
               the PW-Hacks Jan-2023. "
              ghLink="https://github.com/NDharshan/RIP_Engineers_FC36"
              demoLink="https://github.com/NDharshan/RIP_Engineers_FC36"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatDoYouReckon}
              isBlog={false}
              title="What do you Reckcon ?"
              description="Adds lenses to what expenses that stand in number, though in reckoning none. 
              Triple accounting system based on blockchain to manage our finances. Despite having or getting 
              salaries of multiple LPAs, many students and professionals can hardly manage their finances and 
              lack the skills in accountting to independently manage it.
              Double entry accounting is a principle which is used to prevent and mitigate errors occuring.
              Understanding and distribution of expenses"
              ghLink="https://github.com/NDharshan/taarkshya-flutter-bookkeeping"
              demoLink="https://github.com/NDharshan/taarkshya-flutter-bookkeeping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchainMedical}
              isBlog={false}
              title="Blockchain and Medical Consultation Interface"
              description="Though we have health care management systems they are still in Web2 and we need to 
              upgrade to Web3. We need to change the system of traditional consultations. We take our prescription
               forms which are nearly indecipherable to us to Pharmacies. There have been multiple times that 
               because of handwriting issues the prescription is misread and always requires a person with high 
               technical expertise always present there.
              These days when we even order our coffee and breakfast online do we need to order these in person, 
              really? in the 2023 ? This project was built at HackNITR4.0, NIT Rourklea."
              ghLink="https://github.com/NDharshan/Suparna-Blockchain"
              demoLink="https://devfolio.co/projects/blockchain-and-medical-consultation-interface-8e24"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventManagement}
              isBlog={false}
              title="Event Management and Crowd-Funding System"
              description="This is an application to streamline the process of Event management by providing an 
              easy interface for a host to post details about the event to bridge the gap in communication and 
              also bring transparency in the persisting problem in the expenses i.e. the funds raised, spent and
               residuals. Few volunteers managing the program implies there is no ways to handle crowds from the 
               logistics point of view and track expenses in a transparent manner and the probability of unwittingly
                committed errors and the requirement of RSVP and its importance in Food and travel costs. Also the 
                necessity of documentation and accountability of the reminder of funds left."
              ghLink="https://github.com/NDharshan/suchishat"
              demoLink="https://devfolio.co/projects/suchishat-7e78"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
