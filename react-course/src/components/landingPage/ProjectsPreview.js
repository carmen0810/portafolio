import ExternalLink from "../../images/project-external.png";
import GithubRepo from "../../images/project-source.png";
import { ProjectsPreviewData } from "../data/ProjectsData";

const ProjectsPreview = () => {
  return (
    <section className=" portfolio-grid">
      {ProjectsPreviewData.map((project, index) => (
        <section key={index} className="project">
          <section className="project-image-cover">
            <img src={project.img} alt="" className="project-img"></img>
          </section>
          <section className="project-description">
            <p className="white-text p-tag">{project.description}</p>
            <section className="project-meta-stack ">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="project-links">
             
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default ProjectsPreview;