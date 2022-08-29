import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/CARMEN-HERRERA.pdf";
export const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="CARMEN-HERRERA">
        <img src={DownloadIcon} alt="" className="download-img"></img>Descargar
        Curriculum Vitae
      </a>
    </section>
  );
};

export default DownloadResume;