import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          {" "}
          Welcome to CYF Hotel
          <img
            className="cyf-img"
            src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
            alt="cyf logo"
          />
        </header>
      </div>
    );
  }
}

export default Logo;
