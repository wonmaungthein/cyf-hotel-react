import React from "react";
// import moment from "react-moment";

export class ResultTable extends React.Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <div className="row">
          <div className="col">
            <table className="table search-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>First Name</th>
                  <th>Surname</th>
                  <th> Email</th>
                  <th> Rome ID</th>
                  <th> Check In Date</th>
                  <th> Check Out Date</th>
                  <th>Days Staying</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {this.props.results.map(result => <tr>{result.title}</tr>)}
                  </td>
                  <td>
                    {this.props.results.map(result => (
                      <tr>{result.firstName}</tr>
                    ))}
                  </td>
                  <td>
                    {this.props.results.map(result => (
                      <tr>{result.surname}</tr>
                    ))}
                  </td>
                  <td>
                    {this.props.results.map(result => <tr>{result.email}</tr>)}
                  </td>
                  <td>
                    {this.props.results.map(result => <tr>{result.roomId}</tr>)}
                  </td>
                  <td>
                    {this.props.results.map(result => (
                      <tr>{result.checkInDate}</tr>
                    ))}
                  </td>
                  <td>
                    {this.props.results.map(result => (
                      <tr>{result.checkOutDate}</tr>
                    ))}
                  </td>
                </tr>
                {/* Add search by name here */} {/* </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}