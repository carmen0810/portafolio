const PortfolioDescription = () => {
    return (
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">Mi Portafolio</h2>
        <p className="white-text p-tag">
        Me dedicado a realizar diferentes proyectos, aqui estan
          algunos de mis favoritos que resume mis conocimientos.{" "}
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
    );
  };
  
  export default PortfolioDescription;