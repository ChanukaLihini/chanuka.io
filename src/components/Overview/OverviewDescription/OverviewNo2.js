import firstImage from "./../../../images/overview02_1.jpg";
import secondImage from "./../../../images/overview02_2.png";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";

import "./Overview.css";
const basePath = '/chanuka.io'

function OverviewNo2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(basePath +"/overview");
  };
  return (
    <>
      <div className="main-container">
        <div className="back-btn-container">
          <button className="back-btn" onClick={handleClick}>
            Back
          </button>
        </div>

        <div class="header-line non-padded">
          <h2>
            Self-reconfigurable modular robot for search and rescue
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <div className="desc">
            This research centers on the development of self-reconfigurable
            modular robots specifically designed for search and rescue missions
            in collapsed buildings. The primary focus was on ensuring
            adaptability and reliability, critical factors for operating in
            unpredictable and hazardous environments. To achieve this, identical
            robot modules were created, each equipped with its own vision
            system, power source, communication module, and mobility. This
            design ensures that even if one module fails, the remaining modules
            can continue functioning effectively.
          </div>

          <div className="desc">
            Communication between the modules were managed through a centralized
            system, where an external computer handles all processing and
            control tasks. This setup allows the modules to work together
            seamlessly, performing collaborative tasks by combining into complex
            shapes when necessary. The ability to form different configurations
            enables the robot to navigate through challenging terrains and adapt
            to various situations encountered during search and rescue
            operations.
          </div>

          <div className="desc">
            The autonomous capability of these modules to self-assemble and
            disassemble into different shapes and configurations was tested
            through experiments to evaluate the performance of the robots.
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewNo2;
