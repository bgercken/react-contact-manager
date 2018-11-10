import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

// import chip from "../../assets/bkg_128x128.png";

// import "./contact.css";

// Class component.

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    console.log("onShowClick");

    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    let res = {};
    try {
      res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch({ type: "DELETE_CONTACT", payload: id });
      console.log("status: " + res.status);
    } catch (e) {
      // Delete locally no matter what...
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  /* 
  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };
 */

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    const imgDivStyle = {
      width: "128px",
      height: "128px"
    };
    /* 
    const imgTagStyle = {
      left: "10px",
      width: "128px",
      height: "128px"
    };
 */
    // const chip1 = "/assets/bkg_128x128.png";
    // const chip1 = "http://gercken.org/assets/bkg_128x128.png";
    // const chip1 = "assets/head-shot.jpg";
    // const chip1 = "https://avatars1.githubusercontent.com/u/215643?s=400&v=4";

    const chip_base_url = "https://avatars1.githubusercontent.com/u/21564";
    let chip1 = chip_base_url + id + "?s=400&v=1";
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <div className="container">
                  <div className="row">
                    <div className="uiScaledImageContainer" style={imgDivStyle}>
                      <img
                        className="img-thumbnail"
                        src={chip1}
                        style={{
                          left: "10px",
                          width: "128px",
                          height: "128px"
                        }}
                        alt=""
                      />
                    </div>
                    <ul className="listGroup">
                      <li className="list-group-item">Email: {email}</li>
                      <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
