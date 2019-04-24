import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class rootForm extends Component {
  render() {
    return (
      <div>
        <div className="columns centerall">
          <div className="column">
            <Link
              to="/estimmation/simple/appartement"
              className="button is-info is-medium is-pd-4"
            >
              <i class="uil uil-home" />
              Appartement
            </Link>
          </div>
          <div className="column">
            <Link
              to="/estimmation/simple/maison"
              className="button is-success is-medium is-pd-4"
            >
              <i class="uil uil-building" />
              Maison
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
