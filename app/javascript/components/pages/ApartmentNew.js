import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Footer from "../components/Footer"
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: "",
        city: "",
        price: "",
      },
      success: false
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    e.preventDefault()
    this.props.createNewApartment(this.state.form)
    this.setState({ success: true })
  };

  render() {
    return (
      <>
        <p>this is ApartmentNew</p>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <Button name="submit" color="secondary" onClick={this.handleSubmit}>
            Create a New Apartment
          </Button>
        </Form>
        <Footer />
        { this.state.success && <Redirect to="/ApartmentIndex" />}
      </>
    );
  }
}

export default ApartmentNew;
