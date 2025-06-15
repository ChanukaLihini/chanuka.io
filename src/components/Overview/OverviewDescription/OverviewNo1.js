import firstImage from "./../../../images/overview01_1.jpg";
import secondImage from "./../../../images/overview01_2.jpg";
import thirdImage from "./../../../images/overview01_3.jpg";
import forthImage from "./../../../images/overview01_4.jpg";
import fifthImage from "./../../../images/overview01_5.jpg";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft} from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faCaretLeft} />             
            <span> Projects</span>
          </button>
        </div>
        <div class="header-line non-padded">
          <h2>Soft robotic gripper with adaptive grasping</h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />
          <img src={forthImage} alt="" />
          <img src={fifthImage} alt="" />

          <div className="desc__container">
            <div className="desc">
              This project involved the development of a soft robotic gripper
              capable of performing multiple grasping patterns. A novel hybrid
              actuator was designed by integrating a PneuNet actuator with a
              layer jamming mechanism, combining the compliance of soft
              actuation with stiffness control of jamming-based locking. This
              approach addressed the inherent limitations of conventional soft
              actuators, such as low output force and lack of shape locking.
            </div>

            <div className="desc">
              Finite Element Analysis (FEA) and experimental studies were
              conducted to analyze the influence of geometrical parameters on
              PneuNet actuator performance. Materials were selected based on
              mechanical testing: Smooth-On Sorta Clear 40 was used for the
              PneuNet body, and sandpaper sheets were employed for the jamming
              layers due to their high friction and stiffness properties. The
              resulting actuator demonstrated enhanced grasping and tip force,
              along with a shape locking capability enabled by jamming
              actuation. This actuator was then implemented in a reconfigurable
              soft gripper, capable of autonomously switching between different
              grasping modes.
            </div>

            <div className="desc">
              To enable adaptive functionality, a vision-based system was
              developed to identify object shape and size, allowing the gripper
              to automatically select the most suitable grasping pattern. The
              proposed system outperformed conventional grippers that rely on a
              single universal grasping strategy, showing improved grasp success
              rates across a variety of object types.
            </div>

            <div className="publications__line">
              <h3>Publications</h3>
              <div className="slim-line"></div>
              <ul>
                <div className="publication__line">
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/10792893"
                    target="_blank"
                  >
                    PneuNet Based Hybrid Soft Gripper for Multi-Shape Object
                    Handling
                  </a>
                  <div>
                    T Tennakoon , A Kulasekera , R Gopura and D Chathuranga
                  </div>
                  <div>IEEE Acess, 2024</div>
                </div>

                <div className="publication__line">
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/9906262"
                    target="_blank"
                  >
                    Variable Stiffness Soft Actuator using Layer Jamming for
                    Food Handling
                  </a>
                  <div>
                    C.L.Tennakoon , A.L.Kulasekera , D.S.Chathuranga and
                    R.A.R.C.Gopura
                  </div>
                  <div>
                    Moratuwa Engineering Research Conference (MERCon), 2022
                  </div>
                </div>

                <div className="publication__line">
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/9659425"
                    target="_blank"
                  >
                  Effect of Geometrical Parameters on PneuNet Bending Performance
                  </a>
                  <div>
                  T Tennakoon , A Kulasekera , D Chathuranga and R Gopura
                  </div>
                  <div>
                    International Conference on Advanced Robotics (ICAR), 2021
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewNo1;
