import React from "react";
import confLogo from "../images/badge-header.svg";
import galaxias from "../images/galaxia.jpg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div>
          <div className="Badge__section-name">
            <img className="gali" src={galaxias} alt="avatar" />
            <h1>
              Oscary <br /> Garcia
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>Frontend Develop</h3>
            <div>@oscarygarcias.</div>
          </div>
          <div className="Badge__footer">#platziconf</div>
        </div>
      </div>
    );
  }
}

export default Badge;
