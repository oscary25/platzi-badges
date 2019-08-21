import React from "react";
import Navbar from "../components/Navbar";
import "";

class Badgenews extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Badgenews;
