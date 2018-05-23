import React from "react";

export class SearchButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary fn-submit-name">
          {this.props.Text}
        </button>
      </div>
    );
  }
}
