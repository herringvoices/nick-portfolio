import { useState } from "react";
import { motion } from "framer-motion";
import workHistoryData from "../data/workHistory.json";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Experience.css";

function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sort work history: Tech jobs first, then non-tech jobs - both sorted by end date
  const sortedWorkHistory = [...workHistoryData].sort((a, b) => {
    // First sort by isTech (tech jobs first)
    if (a.isTech !== b.isTech) {
      return a.isTech ? -1 : 1;
    }

    // Then sort by dateEnd (most recent first)
    return b.dateEnd.localeCompare(a.dateEnd);
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Format date from YYYY-MM to "Month Year"
  const formatDate = (dateString) => {
    if (!dateString) return "Present";

    const date = new Date(`${dateString}-01`);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return `${month} ${year}`;
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h4 className="mb-3 section-header">
          <FontAwesomeIcon icon={["fas", "briefcase"]} className="me-2" />
          Work Experience
        </h4>
        <p className="text-light mb-4">
          My professional journey spans both technical and non-technical roles.
          Click on any position to see more details.
        </p>
      </motion.div>

      {/* Tech Experience Section */}
      <h5 className="text-secondary mb-3">Technical Experience</h5>
      <Row>
        {sortedWorkHistory
          .filter((job) => job.isTech)
          .map((job, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="experience-box p-4"
                onClick={() => handleJobClick(job)}
              >
                <h5 className="text-primary fw-bold mb-1">{job.title}</h5>
                <h6 className="mb-2">{job.company}</h6>
                <div className="text-secondary mb-3">
                  {formatDate(job.dateStart)} - {formatDate(job.dateEnd)}
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={["fas", "info-circle"]}
                    className="me-2 text-secondary"
                  />
                  <span className="text-secondary">Click for details</span>
                </div>
              </motion.div>
            </Col>
          ))}
      </Row>

      {/* Non-Tech Experience Section */}
      <h5 className="text-secondary mb-3 mt-4">
        Other Professional Experience
      </h5>
      <Row>
        {sortedWorkHistory
          .filter((job) => !job.isTech)
          .map((job, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="experience-box p-4"
                onClick={() => handleJobClick(job)}
              >
                <h5 className="text-primary fw-bold mb-1">{job.title}</h5>
                <h6 className="mb-2">{job.company}</h6>
                <div className="text-secondary mb-3">
                  {formatDate(job.dateStart)} - {formatDate(job.dateEnd)}
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={["fas", "info-circle"]}
                    className="me-2 text-secondary"
                  />
                  <span className="text-secondary">Click for details</span>
                </div>
              </motion.div>
            </Col>
          ))}
      </Row>

      {/* Job Details Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>
            <div className="fw-bold">{selectedJob?.title}</div>
            <div className="fs-6">{selectedJob?.company}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <div className="mb-3">
            <span className="text-secondary fw-bold">Duration: </span>
            {selectedJob && (
              <span>
                {formatDate(selectedJob.dateStart)} -{" "}
                {formatDate(selectedJob.dateEnd)}
              </span>
            )}
          </div>

          <div className="mb-3">
            <h6 className="text-secondary fw-bold">Responsibilities:</h6>
            <ul className="ps-3">
              {selectedJob?.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-2">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Experience;
