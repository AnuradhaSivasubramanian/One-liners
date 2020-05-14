import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneliner } from "../actions/fetchOneliner";
import handleUpdateOneliner from "../helpers/handleUpdateVote";
import Upvote from "../images/upvote.svg";
import { addVote } from "../actions/addVote";
import "../stylesheets/ViewOneliner.scss";

export class ViewOneliner extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchOneliner());
  };
  render() {
    return (
      <div className="viewOneliner--wrapper">
        <div className="viewoneliner--wrapper_nav">
          <div className="project--name_icon">
            <span className="name--icon_span_solid">ON</span>
            <span className="name--icon_span">E</span>
            <span className="name--icon_span_solid">LI</span>
            <span className="name--icon_span">NERS</span>
          </div>
          <nav className="nav--wrapper">
            <Link className="nav--link" to="/">
              Home
            </Link>
          </nav>
        </div>
        <div className="oneliner--wrapper">
          {this.props.guest
            ? this.props.guest.map((item, index) => (
                <div className="oneliner--wrapper_content" key={index}>
                  <div className="oneliner--content_main">
                    <h4>{item.data}</h4>
                  </div>
                  <div className="oneliner--content_name">
                    <div className="oneliner--name">
                      <p>-{item.name}</p>
                    </div>
                    <div className="oneliner--vote">{item.upvote} Votes</div>
                    <div className="oneliner--upvote">
                      <img
                        src={Upvote}
                        alt="vote"
                        className="image--upvote"
                        onClick={() => {
                          handleUpdateOneliner(item);
                          this.props.dispatch(addVote(item));
                        }}
                      />
                    </div>
                  </div>
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
