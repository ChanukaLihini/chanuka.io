import firstImage from "./../../../images/overview05_1.png";
import secondImage from "./../../../images/overview05_2.png";
import thirdImage from "./../../../images/overview05_3.png";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";

import "./Overview.css";

function OverviewNo5() {
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
          <h2>Continuum robot arm for pipe inspection</h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />

          <div className="desc">
            This project focused on the design and development of a continuum
            robotic arm intended for navigating narrow and complex pipe systems
            for cleaning and inspection purposes. Carried out under DynamicsLK
            (Pvt) Ltd, the project was commissioned by a client seeking a
            compact and flexible robotic solution capable of operating in
            confined environments.
          </div>

          <div className="desc">
            The robot was designed with a tip-following control system, allowing
            it to accurately follow curved and branching paths within pipes.
            Custom control architecture was developed to enhance precision and
            adaptability, ensuring reliable operation even in complex and
            constrained conditions.
          </div>

          <div className="desc">
            The mechanical design prioritized compactness and flexibility,
            enabling the robot to function effectively in tight spaces where
            traditional rigid systems cannot reach. The arm can extend up to 3
            meters, providing access to deep and obstructed sections of pipe
            networks. This continuum robot serves as a practical solution for
            industrial applications such as pipeline inspection, HVAC system
            maintenance, and non-destructive testing, offering a blend of reach,
            flexibility, and control tailored for real-world operational
            environments.
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewNo5;
