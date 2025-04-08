import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/project.css";
import "../css/animation.css";
import clothingImg from "../assets/dev images/clothing.png";
import timepassImg from "../assets/dev images/Timepass.png";
import portfolioimg from "../assets/dev images/portfolio.png";
import fullstackImg from "../assets/dev images/fullstack webapp.png";
import portfolioDesign from "../assets/des images/Portfoliodesign.png";
import bpayDesign from "../assets/des images/B-pay.png";
import "aos/dist/aos.css";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS

const techIcons = {
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  JS: "fab fa-js",
  JavaScript: "fab fa-js",
  "React JS": "fab fa-react",
  ReactJs: "fab fa-react",
  Bootstrap: "fab fa-bootstrap",
  SpringBoot: "fas fa-leaf",
  MySQL: "fas fa-database",
  Figma: "fab fa-figma",
  "Email JS": "fas fa-envelope",
  Kubernetes: "fas fa-network-wired",
  AOS: "fas fa-magic",
};

const projectsData = [
  {
    category: "Web Development (UI)",
    projects: [
      {
        title: "Clothing Website",
        image: clothingImg,
        tech: ["React JS", "Bootstrap", "Email JS"],
        link: "https://sleekfashion.netlify.app/",
      },
      {
        title: "Portfolio",
        image: portfolioimg,
        tech: ["ReactJs", "AOS", "Bootstrap"],
        link: "../index.html",
      },
      {
        title: "Timepass Entertainment",
        image: timepassImg,
        tech: ["HTML", "CSS", "JS"],
        link: "https://timepassdotcom.netlify.app/",
      },
    ],
  },
  {
    category: "Web and App Designing",
    projects: [
      {
        title: "Portfolio Design",
        image: portfolioDesign,
        tech: ["Figma"],
        link:
          "https://www.figma.com/proto/dWcod3GyI13y5Sue1RhfHs/My-portfolio?node-id=27-2&starting-point-node-id=27%3A2&t=E0J9URMGxflwvn6A-1",
      },
      {
        title: "B-Pay App Design",
        image: bpayDesign,
        tech: ["Figma"],
        link:
          "https://www.figma.com/proto/wg8rOgWzl2PDasOX465Txc/App?node-id=1-2&t=AZ2kH2FHsd2mRtOp-1",
      },
    ],
  },
  {
    category: "FullStack Web Application",
    projects: [
      {
        title: "Appointment Scheduling",
        image: fullstackImg,
        tech: ["SpringBoot", "React JS", "MySQL", "Kubernetes"],
        link: "#",
      },
    ],
  },
];

const ProjectCard = ({ title, image, tech, link, delay }) => (
  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={delay}>
    <div className="project-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="project-body">
        <h5 className="project-title">{title}</h5>
        <div className="tech-tags mb-3 d-flex flex-wrap">
          {tech.map((tag, index) => {
            const iconClass = techIcons[tag];
            const cleanClass = tag.replace(/[\s()]/g, "").toLowerCase() + "-icon";
            return (
              <span
                key={index}
                className={`badge bg-secondary me-2 mb-2 d-flex align-items-center gap-1 tech-badge ${cleanClass}`}
              >
                {iconClass && <i className={`${iconClass}`}></i>}
                {tag}
              </span>
            );
          })}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="projects-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>
        {projectsData.map((category, idx) => (
          <div className="project-category mb-5" key={idx}>
            <h4 className="category-title mb-4">{category.category}</h4>
            <div className="row">
              {category.projects.map((project, pIdx) => (
                <ProjectCard key={pIdx} {...project} delay={100 * pIdx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
