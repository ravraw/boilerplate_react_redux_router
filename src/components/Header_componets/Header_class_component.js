import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  state = {
    skyIsBlue: true
  };
  render() {
    return (
      <div>
        <h1>I am header</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    property1: store.property1,
    property2: store.property2
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onActionCall_1 =()=>dispatch({type:ACTION_TYPE_1,payload:{a:1,b:2}}),
    onActionCall_2 =()=>dispatch({type:ACTION_TYPE_2,payload:{a:2,b:3}})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);
