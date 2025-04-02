import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
//Shut up the linter
void motion;

const NavBar = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("/");

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location]);

  // Animation variants for navigation items
  const navItemVariants = {
    hover: {
      scale: 1.1,
      color: "var(--bs-primary)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Regular navbar for md and above */}
      <Navbar
        expand="md"
        className="bg-dark navbar-dark fs-4 py-2 d-none d-md-flex border-bottom border-primary"
      >
        <Container>
          <div className="d-flex space-around">
            <motion.div
              initial={{ fill: "var(--bs-light)" }}
              whileHover={{ fill: "var(--bs-primary)", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navbar.Brand as={Link} to="/">
                <Logo height="30" />
              </Navbar.Brand>
            </motion.div>

            <Nav className="d-flex flex-row">
              {/* Projects Link */}
              <motion.div
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="nav-item-container"
              >
                <Nav.Link
                  as={Link}
                  to="/projects"
                  active={activeKey === "/projects"}
                  className="mx-2"
                >
                  <motion.span
                    initial={{ color: "var(--bs-light)" }}
                    variants={navItemVariants}
                    whileHover="hover"
                  >
                    Projects
                  </motion.span>
                </Nav.Link>
              </motion.div>

              {/* Experience Link */}
              <motion.div
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="nav-item-container"
              >
                <Nav.Link
                  as={Link}
                  to="/experience"
                  active={activeKey === "/experience"}
                  className="mx-2"
                >
                  <motion.span
                    initial={{ color: "var(--bs-light)" }}
                    variants={navItemVariants}
                    whileHover="hover"
                  >
                    Experience
                  </motion.span>
                </Nav.Link>
              </motion.div>

              {/* Education Link */}
              <motion.div
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="nav-item-container"
              >
                <Nav.Link
                  as={Link}
                  to="/education"
                  active={activeKey === "/education"}
                  className="mx-2"
                >
                  <motion.span
                    initial={{ color: "var(--bs-light)" }}
                    variants={navItemVariants}
                    whileHover="hover"
                  >
                    Education
                  </motion.span>
                </Nav.Link>
              </motion.div>
            </Nav>
          </div>
        </Container>
      </Navbar>

      {/* Mobile bottom navbar for screens below md */}
      <Navbar fixed="bottom" className="bg-dark navbar-dark py-0 d-md-none">
        <Container>
          <Nav className="d-flex flex-row justify-content-around align-items-center w-100">
            {/* Home/Logo Link */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="nav-item-container"
            >
              <Nav.Link
                as={Link}
                to="/"
                active={activeKey === "/"}
                className="mx-2"
              >
                <div className="my-auto btn btn-light">
                  <Logo height="32" />
                </div>
              </Nav.Link>
            </motion.div>

            {/* Projects Link */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="nav-item-container"
            >
              <Nav.Link
                as={Link}
                to="/projects"
                active={activeKey === "/projects"}
                className="mx-2"
              >
                <motion.div
                  initial={{ color: "var(--bs-light)" }}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon size="2xl" icon={faGear} />
                </motion.div>
              </Nav.Link>
            </motion.div>

            {/* Experience Link */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="nav-item-container"
            >
              <Nav.Link
                as={Link}
                to="/experience"
                active={activeKey === "/experience"}
                className="mx-2"
              >
                <motion.div
                  initial={{ color: "var(--bs-light)" }}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon size="2xl" icon={faBriefcase} />
                </motion.div>
              </Nav.Link>
            </motion.div>

            {/* Education Link */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="nav-item-container"
            >
              <Nav.Link
                as={Link}
                to="/education"
                active={activeKey === "/education"}
                className="mx-2"
              >
                <motion.div
                  initial={{ color: "var(--bs-light)" }}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon size="2xl" icon={faGraduationCap} />
                </motion.div>
              </Nav.Link>
            </motion.div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
