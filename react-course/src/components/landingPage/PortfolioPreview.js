import ProjectsPreview from "./ProjectsPreview";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  function ResetLocation() {
    window.scrollTo(0, 0);
  }
  return (
    <article className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">Mi Portafolio</h2>
        <p className="white-text p-tag">
          Me dedicado a realizar diferentes proyectos, aqui estan
          algunos proyectos que resume mis conocimientos. {" "}
          <span>
            <a
              href="https://github.com/carmen0810?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
      <section>
        <Link
          onClick={ResetLocation}
          className="more-projects-btn pink-text"
          to="/portfolio"
        >
          Más Proyectos
        </Link>
      </section>
    </article>
  );
};

export default PortfolioPreview;