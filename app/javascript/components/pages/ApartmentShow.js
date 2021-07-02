import React, { Component } from "react";
import { Col, CardTitle, CardText, Card } from 'reactstrap'

class ApartmentShow extends Component {
  render() {
    console.log(this.props.apartment);
    return (
      <>
        <Col sm="6">
          <Card body>
            <CardTitle>This apartment's address is {this.props.apartment.street}!</CardTitle>
            <CardText>
              this is a {this.props.apartment.bedroom} bedroom apartment.
              {this.props.apartment.price}
            </CardText>
          </Card>
        </Col>
      </>
    );
  }
}

export default ApartmentShow;
