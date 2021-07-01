import React, { Component } from "react";

class ApartmentShow extends Component {
  render() {
    console.log(this.props.apartment);
    return (
      <>
        <Col sm="6">
          <Card body>
            <CardTitle>This apartment's address is {this.props.cat.street}!</CardTitle>
            <CardText>
              this is a {this.props.apartment.bedroom} bedroom apartment.{" "}
              {this.props.apartment.price}.
            </CardText>
          </Card>
        </Col>
      </>
    );
  }
}

export default ApartmentShow;
