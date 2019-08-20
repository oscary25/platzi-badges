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
<<<<<<< HEAD

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
=======
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
>>>>>>> fe29a24... ultimo
      </div>
    );
  }
}

export default Badge;
