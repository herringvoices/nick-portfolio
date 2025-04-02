import { useState } from "react";
import { motion } from "framer-motion";
import educationData from "../data/education.json";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Education.css";

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sort education by end date (most recent first)
  const sortedEducation = [...educationData].sort((a, b) =>
    b.dateEnd.localeCompare(a.dateEnd)
  );

  const handleEducationClick = (education) => {
    setSelectedEducation(education);
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
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} className="me-2" />
          Education
        </h4>
        <p className="text-light mb-4">
          My educational background that has prepared me for my career journey.
        </p>
      </motion.div>

      <Row>
        {sortedEducation.map((education, index) => (
          <Col lg={6} className="mb-4" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="education-box p-4"
              onClick={() => handleEducationClick(education)}
            >
              <div className="d-flex align-items-center mb-3">
                <div className="education-icon-small me-3">
                  <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
                </div>
                <div>
                  <h5 className="text-primary fw-bold mb-1">
                    {education.degree}
                  </h5>
                  <h6 className="mb-0">{education.institution}</h6>
                </div>
              </div>
              <div className="mb-2 text-light">{education.field}</div>
              <div className="text-secondary">
                {formatDate(education.dateStart)} -{" "}
                {formatDate(education.dateEnd)}
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
