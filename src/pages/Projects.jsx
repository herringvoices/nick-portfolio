import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.css";

function Projects() {
  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h4 className="mb-3 section-header">
          <FontAwesomeIcon icon={["fas", "laptop-code"]} className="me-2" />
          Projects
        </h4>
        <p className="text-light mb-4">
          Here are some of the projects I've worked on that showcase my skills
          and experience.
        </p>
      </motion.div>

      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          className="mb-4"
        >
          <div className="project-box p-4">
            <Row>
              <Col md={8}>
                <h4 className="text-primary fw-bold mb-3">
                  {project.projectName}
                </h4>
                <p className="mb-4">{project.projectDescription}</p>
              </Col>
              <Col md={4}>
                <div>
                  <h6 className="mb-2 tech-stack-header">Tech Stack:</h6>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.techUsed.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-badge-secondary"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="me-2"
                      />
                      GitHub
                    </a>
                  )}
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-badge-secondary"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "globe"]}
                        className="me-2"
                      />
                      Live Demo
                    </a>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>
      ))}
    </Container>
  );
}

export default Projects;
