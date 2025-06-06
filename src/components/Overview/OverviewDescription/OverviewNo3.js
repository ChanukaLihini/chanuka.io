import firstImage from "./../../../images/overview03_1.png";
import secondImage from "./../../../images/overview03_2.png";
import thirdImage from "./../../../images/overview03_3.png";
import "./../../../styles/HeaderLine.css";
import { useNavigate } from "react-router-dom";
import sampleVideo from "./../../../videos/sample.mp4";

import "./Overview.css";

function OverviewNo3() {
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
          <h2>Origami-based soft actuator</h2>
          <div className="title-line"></div>
        </div>

        <div className="row">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />

          <div className="desc">
            This research focuses on the design and development of an
            origami-based soft actuator, inspired by the intricate folding
            patterns of origami. The actuator utilizes a vacuum-driven mechanism
            combined with a skeletal structure to achieve soft bending
            movements. The structure is crafted from a thin polyvinyl chloride
            (PVC) sheet, folded into origami patterns, which provides both
            flexibility and strength. The skeleton is encased in a pouch made
            from thermoplastic polyurethane (TPU) coated polyester fabric,
            ensuring durability and efficient performance under vacuum pressure.
          </div>

          <div className="desc">
            The skeletal design allows for precise control of the actuator's
            bending motion, making it ideal for applications requiring delicate
            handling and flexibility. To evaluate its performance, the actuator
            was subjected to experimental testing, where its bending angle,
            blocked force, and holding force were evaluated.
          </div>

          <div className="desc">
            This origami-inspired soft actuator demonstrates promising potential
            for various uses, particularly in handling soft, delicate and
            complex shaped objects, where flexible, lightweight, and reliable
            actuation is required.
          </div>

          <video width="640" height="360" controls>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default OverviewNo3;
