import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchByName } from "./SearchByName";

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <th>Customer id</th>
              <th />
              <th>Customer Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="Customer id"
                  name="customerId"
                />
              </td>
              <td>
                <SearchButton Text="Search IDs" />
              </td>
              <td>
                <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="Customer Name"
                  name="customer Name"
                />
              </td>
              <td>
                <SearchButton Text="Search Name" />
              </td>
              {/* Add search by name here */}
              {/* <SearchByName /> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
