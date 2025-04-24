import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/CV-Carmen-Herrera-Anicama.pdf";
export const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Carmen-Herrera-Anicama">
        <img src={DownloadIcon} alt="" className="download-img"></img>Descargar
        Curriculum Vitae
      </a>
    </section>
  );
};

export default DownloadResume;