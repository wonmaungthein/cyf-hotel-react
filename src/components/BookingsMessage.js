import React from "react";

const bgstyle = {
  // background: "yellow",
  padding: 13
};
export class BookingsMessage extends React.Component {
  render() {
    return (
      <div className="message" style={bgstyle}>
        <p>
          There are bookings available for today's date{" "}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    );
  }
}
