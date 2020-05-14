import React, { useState } from "react";
import { Link } from "react-router-dom";
import handlePostOneliner from "../helpers/handlePostOneliner";
import CloseIcon from "../images/closeicon.svg";
import "../stylesheets/SubmitOneliner.scss";

export default function SubmitOneliner() {
  const [name, setName] = useState("");
  const [oneliner, setOneliner] = useState("");
  const [successmessage, setSuccessMessage] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
    setSuccessMessage("");
  };
  const updateOneliner = (e) => {
    setOneliner(e.target.value);
    setSuccessMessage("");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePostOneliner({ name: name, data: oneliner })
      .then((response) => {
        setSuccessMessage(response.message);
      })
      .catch((err) => console.log(err.flash));
  };

  return (
    <div className="submitoneliner--wrapper">
      <div className="submitoneliner--wrapper_nav">
        <div className="project--name_icon animate__animated animate__bounce">
          <span className="name--icon_span_solid">ON</span>
          <span className="name--icon_span">E</span>
          <span className="name--icon_span_solid">LI</span>
          <span className="name--icon_span">NERS</span>
        </div>
        <nav className="nav--wrapper">
          <Link className="nav--link" to="/viewoneliner">
            Posts
          </Link>
        </nav>
      </div>
      <div className="oneliner--input_form" onSubmit={handleFormSubmit}>
        {successmessage.includes("successfull") ? (
          <div className="oneliner--input_success">
            <div className="oneliner--success_text">
              <h6>{successmessage}</h6>
            </div>
            <div className="oneliner--success_close">
              <img
                className="success--image"
                src={CloseIcon}
                alt="close"
                onClick={() => {
                  setSuccessMessage("");
                  setOneliner("");
                  setName("");
                }}
              />
            </div>
          </div>
        ) : (
          <form className="oneliner--form">
            {successmessage.includes("fill") ? (
              <p className="oneliner--form_fillmessage">
                Fill all fields before submit
              </p>
            ) : null}
            <textarea
              placeholder=" Submit your oneliner here"
              type="text"
              name="oneliner"
              className="form--input_text"
              value={oneliner}
              onChange={updateOneliner}
              data-test="input-oneliner"
            />
            <input
              placeholder=" Name"
              type="text"
              name="name"
              className="form--input_name"
              value={name}
              onChange={updateName}
              data-test="input-name"
            />
            <button className="btn--primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
