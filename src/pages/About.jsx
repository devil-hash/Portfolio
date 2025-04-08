import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/about.css";
import "../css/animation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skillIcons = {
  "Spring Boot": "fas fa-leaf",
  MySQL: "fas fa-database",
  Oracle: "fas fa-database",
  HTML5: "fab fa-html5",
  CSS3: "fab fa-css3-alt",
  JavaScript: "fab fa-js",
  "React.js": "fab fa-react",
  "Bootstrap 5": "fab fa-bootstrap",
  "UI/UX Design": "fas fa-pencil-ruler",
  Figma: "fab fa-figma",
  "Adobe XD": "fas fa-vector-square",
  "Responsive Design": "fas fa-mobile-alt",
  Eclipse: "fas fa-code",
  Git: "fab fa-git-alt",
  GitHub: "fab fa-github",
  Postman: "fas fa-envelope-open-text",
  "VS Code": "fas fa-code",
  Docker: "fab fa-docker",
  Kubernetes: "fas fa-network-wired",
  Jenkins: "fas fa-cogs",
};

const About = () => {
  useEffect(() => {
    // Add animation libraries if needed
  }, []);

  const renderSkill = (skill) => (
    <li key={skill}>
      <i className={`${skillIcons[skill] || "fas fa-tools"}`}></i>
      {skill}
    </li>
  );

  return (
    <section className="about-section py-5 mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title mb-4">About Me</h2>
            <div className="about-content">
            <p>Hi, I'm Gowtham, a passionate Web Developer and Designer with a focus on creating beautiful, functional websites. My journey in tech has been driven by a deep love for designing user-friendly interfaces and building powerful web applications.</p>
                        
            <p>With a background in Computer Science, I thrive on crafting aesthetic and responsive designs along with scalable, user-centric applications. Whether collaborating with teams or working on solo projects, I believe in creating solutions that delight users.</p>
              {/* Education */}
              <div className="education-section mt-5">
                <h3 className="mb-4">Education</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">2021 - 2024</div>
                    <h4 className="timeline-title">Bachelor of Engineering</h4>
                    <p>Sri Venkateswaraa College Of Technology, Kanchipuram</p>
                    <p>CGPA - 8.07</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2017 - 2020</div>
                    <h4 className="timeline-title">Diploma in Electronics</h4>
                    <p>Government Polytechnic College, Trichy</p>
                    <p>Percentage - 76%</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2017</div>
                    <h4 className="timeline-title">Vailankanni MHSS</h4>
                    <p>State Board, Chennai</p>
                    <p>Percentage - 76%</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="skills-section mt-5">
                <h3 className="mb-4">Technical Skills</h3>
                <div className="row">
                  <div className="col-md-6">
                    <p className="skills-category">BACKEND TECHNOLOGIES</p>
                    <ul className="skills-list">
                      {renderSkill("Spring Boot")}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="skills-category">DATABASE TECHNOLOGIES</p>
                    <ul className="skills-list">
                      {["MySQL", "Oracle"].map(renderSkill)}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="skills-category">FRONTEND TECHNOLOGIES</p>
                    <ul className="skills-list">
                      {["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap 5"].map(renderSkill)}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="skills-category">DESIGNING</p>
                    <ul className="skills-list">
                      {["UI/UX Design", "Figma", "Adobe XD", "Responsive Design"].map(renderSkill)}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="skills-category">TOOLS</p>
                    <ul className="skills-list">
                      {[
                        "Eclipse",
                        "Git",
                        "GitHub",
                        "Postman",
                        "VS Code",
                        "Docker",
                        "Kubernetes",
                        "Jenkins",
                      ].map(renderSkill)}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
