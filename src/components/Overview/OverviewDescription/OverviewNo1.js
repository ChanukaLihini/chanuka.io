import firstImage from "./../../../images/overview01_1.jpg";
import secondImage from "./../../../images/overview01_2.jpg";
import thirdImage from "./../../../images/overview01_3.jpg";
import forthImage from "./../../../images/overview01_4.jpg";
import fifthImage from "./../../../images/overview01_5.jpg";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";

import "./Overview.css";

function OverviewNo1() {
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
          <h2>Soft robotic gripper with multiple grasping patterns</h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />
          <img src={forthImage} alt="" />
          <img src={fifthImage} alt="" />

          <div className="desc">
            This research focuses on the development of a novel hybrid soft
            gripper, combining a Pneunet actuator with a layer jamming actuation
            to address the limitations of traditional soft actuators. By
            integrating these two actuation methods, the gripper achieves
            enhanced grasping force and precision. Through Finite Element
            Analysis (FEA) and experimental testing, the effects of different
            geometrical parameters on the Pneunet actuator's performance were
            analyzed, leading to the selection of Sorta Clear 40 for the Pneunet
            and sandpaper for the layer jamming components.
          </div>

          <div className="desc">
            The hybrid design significantly improves the gripper's
            functionality, offering increased grasping and tip force, as well as
            a shape-locking feature activated through jamming. The proposed
            gripper with reconfigurable mechanism allows the fingers to adjust
            to various objects by changing its grasping pattern. This
            adaptability makes the gripper suitable for a wide range of
            applications and provides greater control during complex tasks.
          </div>

          <div className="desc">
            To further enhance its capabilities, a vision- based system was
            developed, enabling the gripper to autonomously select the optimal
            grasping mode based on the object's shape, size and orientation.
            This approach has led to a higher success rate compared to grippers
            using universal grasping modes.
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewNo1;
