import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <p>This is apartment index</p>
        <br />
        <Col sm="6">
          {this.props.apartments.map((apartment) => {
            return (
              <NavLink to={`/ApartmentShow/${apartment.id}`}>
                {apartment.street}
              </NavLink>

              //   <Card body key={apartment.id}>
              //     <CardTitle>
              //       <h4>{apartment.street}</h4>
              //     </CardTitle>
              //   </Card>
            );
          })}
        </Col>
      </>
    );
  }
}

export default ApartmentIndex;
