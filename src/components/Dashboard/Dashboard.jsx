/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faChartBar, faTh, faCog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="dashboard">
      <div className="sidebar" style={{ display: showSidebar ? "block" : "none" }}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <Button variant="link" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartBar} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTh} />
              <span>Widgets</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Messages</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Container fluid>
          <Row className="header">
            <Col xs={6}>
              <Button variant="link" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <h2>Dashboard</h2>
            </Col>
            <Col xs={6} className="text-end">
              <Button variant="link">
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
              <Button variant="link">
                <FontAwesomeIcon icon={faCog} />
              </Button>
              <Button variant="link">
                <FontAwesomeIcon icon={faTh} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div className="card">
                <h3>Card 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card">
                <h3>Card 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card">
                <h3>Card 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
