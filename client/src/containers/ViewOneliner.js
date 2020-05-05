import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneliner } from "../actions/fetchOneliner";

export class ViewOneliner extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchOneliner());
  };
  render() {
    return (
      <div className="viewOneliner--wrapper">
        <div className="navbar--wrapper">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/viewoneliner">Posts</Link>
          </nav>
        </div>
        <div className="oneliner--wrapper">
          {this.props.guest
            ? this.props.guest.map((item, index) => (
                <div className="oneliner--wrapper_content" key={index}>
                  <h3>{item.data}</h3>
                  <p>-{item.name}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { guest: state.o.guest };
};

export default connect(mapStateToProps)(ViewOneliner);
