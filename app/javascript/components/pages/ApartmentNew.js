import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: "",
        city: "",
        price: "",
      },
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
  }

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
        </Form>
      </>
    );
  }
}

export default ApartmentNew;
