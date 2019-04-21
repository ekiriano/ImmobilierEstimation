import React, { Component } from "react";
import { connect } from "react-redux";


import SavedAppartements from './simpleUser/saved/savedAppartements';
import SavedMaisons from './simpleUser/saved/savedMaisons';
import SavedBiens from './superUser/saved/savedBien';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAppartments : false,
      showMaisons : true,
      showBiens : false
    }
  }



  onClickshowAppartments(){
    this.setState({showMaisons : false });
    this.setState({showAppartments : true });
    this.setState({showBiens : false });
  }

  onClickshowMaisons(){
    this.setState({showAppartments :false});
    this.setState({showMaisons : true });
    this.setState({showBiens :false});
  }

  onClickshowBiens(){
    this.setState({showAppartments :false});
    this.setState({showMaisons : false });
    this.setState({showBiens :true});
  }

  // TODO ::  Component did update to re store user tye

  // componentWillUpdate(nextprops){
  //   if(nextprops.auth.user){
  //
  //
  //   }
  // }

  render() {
    return (
      <div className="primary-bg">
        <div className="row">
          <div className="columns">
            <div className="column is-2">
              <h1>{this.props.user.name}</h1>
              <h3>{this.props.user.user_type} User</h3>
              <button className="button is-link is-rounded mb-is-0_5" onClick={this.onClickshowMaisons.bind(this)} >Mes estimations de maisons</button>
              <button className="button is-link is-rounded mb-is-0_5" onClick={this.onClickshowAppartments.bind(this)}>Mes estimations d'appartements</button>
              {
              this.props.user.user_type === "super"
              ? <button className="button is-link is-rounded" onClick={this.onClickshowBiens.bind(this)}>Mes estimations de biens</button>
              : <button className="button is-link is-rounded" onClick={this.onClickshowBiens.bind(this)}>Mes estimations de biens(displaying it for regular for demo purposes)</button>
            }
            </div>
            {/* TODO: Switch to a menu like this would be better : https://bulma.io/documentation/components/menu/*/ }
            <div className="column">
              {this.state.showAppartments ? <SavedAppartements/>: null}
              {this.state.showMaisons ? <SavedMaisons/>: null}
              {this.state.showBiens ? <SavedBiens/>: null}
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
