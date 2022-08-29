import Linkedin from "../../images/linkedin-pink.svg";
import Github from "../../images/github-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/carmenherreraanicama/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/carmen0810"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
    </section>
  );
};

export default NavigationSocials;