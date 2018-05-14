import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";
import Logo from "./components/Logo.js";
import { BookingsMessage } from "./components/BookingsMessage.js";
import { SpecialDeals } from "./components/SpecialDeals.js";
import * as FakeBookings from "./data/fakeBookings.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Bookings />
        <div className="App-content">
          <div className="container">
            <BookingsMessage />
            <SpecialDeals />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
