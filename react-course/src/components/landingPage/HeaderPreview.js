//import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hola, soy <br></br>
        <em className="pink-text">Carmen Herrera</em>
        <br></br>front end developer
      </h1>
      <p className="gray-text p-tag">Front End Developer</p>
      {/* <Link className="pink-text" to="/personal-portfolio/portfolio">
        Revisa mi trabajo
      </Link> */}
    </article>
  );
};

export default HeaderPreview;