import React, { Component } from "react";
import classnames from "classnames";


class Step4Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 4) {
          return null;
        }
        return (
          <div>

          <h1> Step 4 estimation </h1>
          <div class="columns">
          <div class="column is-four-fifths">Map and shit</div>
          <div class="column">estimation methods and shit</div>
          </div>
          </div>
        );
      }
}

export default Step4Super;
