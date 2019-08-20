import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo" />
        </div>
        <div>
          <div>
            <img src="" alt="avatar" />
            <h1>
              {" "}
              Oscary <br /> Garcia{" "}
            </h1>
          </div>
          <div>
            <p>Frontedn Develop</p>
            <p>@oscarygarcias.</p>
          </div>
          <div>#platziconf</div>
        </div>
      </div>
    );
  }
}

export default Badge;
