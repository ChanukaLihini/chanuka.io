import firstImage from "./../../../images/overview02_1.jpg";
import secondImage from "./../../../images/overview02_2.png";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";

import "./Overview.css";

function OverviewNo2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/overview");
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
          <h2>Reconfigurable Modular Robots for Search and Rescue Missions</h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <div className="desc__container">
            <div className="desc">
              This project focused on the development of reconfigurable modular
              robots designed for search and rescue operations in collapsed or
              hazardous environments. The primary design goals were adaptability
              and reliability, ensuring continued operation even in the event of
              partial system failures.
            </div>

            <div className="desc">
              Identical robot modules were developed, each equipped with an
              onboard vision system, power supply, communication unit, and
              independent mobility. This redundancy ensured that the system
              could continue functioning even if individual modules failed.
              A centralized control system was implemented, where an external
              computer managed communication, processing, and coordination among
              modules. Despite centralized processing, each module retained
              enough autonomy to perform essential functions.
            </div>

            <div className="desc">
              The modules were designed to collaborate by physically connecting
              to form complex shapes, enabling the robot to adapt to uneven or
              obstructed terrains. The system successfully demonstrated
              autonomous self-assembly, disassembly, and reconfiguration using
              multiple modules to suit different operational needs.
            </div>
          </div>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/Us3-y64fr7E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default OverviewNo2;
