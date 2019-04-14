import React, { Component } from "react";
import { connect } from "react-redux";


import SavedAppartements from './simpleUser/saved/savedAppartements';
import SavedMaisons from './simpleUser/saved/savedMaisons';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAppartments : false,
      showMaisons : true,
    }
  }

  onClickshowAppartments(){
    this.setState({showMaisons : false });
    this.setState({showAppartments : true });
  }

  onClickshowMaisons(){
    this.setState({showAppartments :false});
    this.setState({showMaisons : true });
  }

  
  render() {
    return (
      <div className="primary-bg">
        <div className="row">
          <div className="columns">
            <div className="column is-2">
              <h1>{this.props.user.name}</h1>
              <h3>{this.props.user.user_type} User</h3>
              <button className="button is-link is-rounded mb-is-0_5" onClick={this.onClickshowMaisons.bind(this)} >Mes estimations de maisons</button> 
              <button className="button is-link is-rounded" onClick={this.onClickshowAppartments.bind(this)}>Mes estimations d'appartements</button>
            </div>
            <div className="column">
              {this.state.showAppartments ? <SavedAppartements/>: null}
              {this.state.showMaisons ? <SavedMaisons/>: null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

export default connect(mapStateProps)(Dashboard);
