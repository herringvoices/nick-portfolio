import { motion } from "framer-motion";
import contactData from "../data/contact.json";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";

function Home() {
  const {
    name,
    title,
    tagline,
    email,
    location,
    linkedin,
    github,
    bio,
    techStack,
  } = contactData;

  return (
    <Container className="py-5">
      <motion.div
        className="profile-section mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="align-items-center g-0">
          <Col
            xs={12}
            md={3}
            className="text-center text-md-end pe-md-4 mb-4 mb-md-0"
          >
            <Image
              src="/nickprofile.png"
              alt={name}
              className="profile-image"
            />
          </Col>
          <Col xs={12} md={9}>
            <h2 className="text-primary fw-bold">{name}</h2>
            <h3 className="text-secondary mb-3">{title}</h3>
            <p className="text-light fs-5 mb-4 fst-italic">{tagline}</p>

            <div className="d-flex flex-wrap gap-2">
              <a href={`mailto:${email}`} className="contact-badge">
                <FontAwesomeIcon icon={["fas", "envelope"]} className="me-2" />
                {email}
              </a>
              <div className="contact-badge">
                <FontAwesomeIcon
                  icon={["fas", "location-dot"]}
                  className="me-2"
                />
                {location}
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-badge"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="me-2" />
                LinkedIn
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-badge"
              >
                <FontAwesomeIcon icon={["fab", "github"]} className="me-2" />
                GitHub
              </a>
            </div>
          </Col>
        </Row>
      </motion.div>

      <motion.div
        className="bio-section mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h4 className="mb-3 section-header">
          <FontAwesomeIcon icon={["fas", "user"]} className="me-2" />
          About Me
        </h4>
        <div className="bio-box p-4">
          <p className="mb-0">{bio}</p>
        </div>
      </motion.div>

      <motion.div
        className="tech-stack-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h4 className="mb-3 section-header">
          <FontAwesomeIcon icon={["fas", "code"]} className="me-2" />
          Tech Stack
        </h4>
        <Row>
          {Object.entries(techStack).map(([category, techs], index) => (
            <Col xs={12} md={6} key={index} className="mb-4">
              <h5 className="text-capitalize mb-3 category-title">
                <FontAwesomeIcon
                  icon={getCategoryIcon(category)}
                  className="me-2"
                />
                {category}
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <div className="tech-badge" key={i}>
                    {tech}
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
}

// Helper function to get appropriate icon for each tech category
function getCategoryIcon(category) {
  switch (category.toLowerCase()) {
    case "frontend":
      return ["fas", "laptop-code"];
    case "backend":
      return ["fas", "server"];
    case "tools":
      return ["fas", "wrench"];
    case "devops":
      return ["fas", "cloud"];
    default:
      return ["fas", "cogs"];
  }
}

export default Home;
