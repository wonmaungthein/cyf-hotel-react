import React from "react";

export class SpecialDeals extends React.Component {
  render() {
    const deals = [
      "Trip to Japan 50% off",
      "Trip to American 25% off",
      "Trip to Scotland 60% off",
      "Trip to Sudan 49% off"
    ];

    const dealsList = deals.map(deal => <p>{deal}</p>);
    return <div className="special-deals">{dealsList}</div>;
  }
}
