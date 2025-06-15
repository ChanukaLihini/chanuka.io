import firstImage from "./../../../images/overview04_1.jpg";
import secondImage from "./../../../images/overview04_2.jpeg";
import thirdImage from "./../../../images/overview04_3.jpeg";
import forthImage from "./../../../images/overview04_4.jpeg";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";
import firstVideo from "./../../../videos/overview03_video_1.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft} from '@fortawesome/free-solid-svg-icons';

import "./Overview.css";

function OverviewNo4() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/overview");
  };
  return (
    <>
      <div className="main-container">
        <div className="back-btn-container">
            <button className="back-btn" onClick={handleClick}>
            <FontAwesomeIcon icon={faCaretLeft} />             
            <span> Projects</span>
          </button>
        </div>
        <div class="header-line non-padded">
          <h2>
            Large scale 3D printing platform for marine vessels and components
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />
          <img src={forthImage} alt="" />

          <div className="desc__container">
            <div className="desc">
              This project involved the design and development of a large-scale
              robotic 3D printing system for fabricating marine vessels and
              structural components. The project was conducted under DynamicsLK
              (Pvt) Ltd and successfully implemented in Abu Dhabi, UAE.
            </div>

            <div className="desc">
              The system utilized a KUKA KR 240 R2700 Prime industrial robot
              arm, integrated with a custom PLA pellet-based extrusion system. A
              key challenge was the development of a robust control interface to
              enable seamless communication between the extrusion system and the
              KUKA KR C2 robot controller.
            </div>

            <div className="desc">
              The outcome was a fully functional large-scale additive
              manufacturing setup capable of printing complex marine components
              with high precision and repeatability, showcasing the potential of
              robotic 3D printing in heavy industrial applications.
            </div>
          </div>

          <video width="640" height="360" controls>
            <source src={firstVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default OverviewNo4;
