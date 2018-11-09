import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
    err_name: "",
    err_email: "",
    err_phone: ""
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    let hasErrors = false;

    // Check for Errors
    if (name === "") {
      // this.setState({ errors: { name: "Name is required." } });
      this.setState({ err_name: "Name is required." });
      hasErrors = true; //return;
    }
    if (email === "") {
      this.setState({ err_email: "Email is required." });
      // this.setState({ errors: { email: "Email is required." } });
      hasErrors = true; // return;
    }

    if (phone === "") {
      this.setState({ err_phone: "Phone is required." });
      // this.setState({ errors: { phone: "Phone is required." } });
      hasErrors = true; //return;
    }

    if (hasErrors) return;

    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // dispatch({ type: "ADD_CONTACT", payload: newContact }) )

    // Clear the state/form
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
      err_name: "",
      err_email: "",
      err_phone: ""
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={this.state.err_name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={this.state.err_email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={this.state.err_phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
