import React, { Component } from "react";
import WordWatchlist from "./WordWatchList";
import '../App.css'
export class NavBar extends Component {
  render() {
    return (
      <div id="navbar-newsletter">
        <nav
          className="navbar fixed-top bg-light border-bottom border-bottom-dark"
          data-bs-theme="light"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsAlert
            </a>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Add word to watchlist..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                WatchList
              </button> */}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
