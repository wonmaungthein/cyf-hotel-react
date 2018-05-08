import React from "react";

export class BookingsMessage extends React.Component {
  render() {
    return (
      <div className="message">
        <p>
          There are bookings available for today's date{" "}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    );
  }
}
