import React from "react";

export class SpecialDeals extends React.Component {
  render() {
    const deals = [
      "Trip to Japan",
      "Trip to American",
      "Trip to Scotland",
      "Trip to Sudan"
    ];

    const dealsList = deals.map(deal => <p>{deal}</p>);
    return <div className="special-deals">{dealsList}</div>;
  }
}
