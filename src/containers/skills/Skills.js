// import React from "react";
// import "./Skills.css";
// import SkillSection from "./SkillSection";
// import { Fade } from "react-reveal";

// export default function Skills(props) {
//   const theme = props.theme;
//   return (
//     <div className="main" id="skills">
//       <div className="skills-header-div">
//         <Fade bottom duration={2000} distance="20px">
//           {/* <h1 className="skills-header" style={{ color: theme.text }}>
//             What I Do?
//           </h1> */}
//         </Fade>

//       </div>
//       <SkillSection theme={theme} />
//     </div>
//   );
// }

import React from "react";
import "./Skills.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function About(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={2000}>
          <div className="skills-image-div">
            <FeelingProud theme={theme} />
          </div>
        </Fade>

        <div className="skills-text-div">
          <Fade right duration={1000}>
            <h1 className="skills-heading" style={{ color: theme.text }}>
              About me
            </h1>
          </Fade>
          <Fade right duration={2000}>
            <div>
              <p
                className="subTitle skills-text"
                style={{ color: theme.secondaryText }}
              >
                <p>
                  Hi! I'm Yizhou Lu, an undergraduate student at the Department
                  of Statistics and Data Science, School of Management, Fudan
                  University.
                </p>
                <p>
                  I'm interested in Machine Learning Theory. Recently I'm
                  learning someting about ICL(In-Context Learning) and trying to
                  do some interesting research guided by{" "}
                  <a
                    style={{ color: theme.secondaryText }}
                    href="https://www.tengjiaye.com/"
                  >
                    {" "}
                    Jiaye Teng
                  </a>
                  . If you share interests with me, reach out to contact me!
                </p>
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
