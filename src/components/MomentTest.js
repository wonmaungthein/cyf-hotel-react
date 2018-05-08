import React from "react";
import Moment from "react-moment";
import moment from "moment";

export class MomentTest extends React.Component {
  oneCheckOutitem = this.props.results.map(result => (
    <div>{result.checkOutDate.split("-").join("")} </div>
  ));

  oneCheckInitem = this.props.results.map(result => (
    <div>{result.checkInDate.split("-").join("")}</div>
  ));

  render() {
    return (
      <div className="momentStyle">
        <div>
          {this.oneCheckInitem}
          {this.oneCheckOutitem}
        </div>
        <div>
          {moment("20171121", "YYYYMMDD").from("20191121") // 6 years ago
          }
        </div>
        <div>
          {moment("20171121", "YYYYMMDD").from("20191121") // 6 years ago
          }
        </div>
      </div>
    );
  }
}
