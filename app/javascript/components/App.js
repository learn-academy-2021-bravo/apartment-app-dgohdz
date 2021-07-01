import React from "react";
import { render } from '@testing-library/react';
import Header from "./components/Header";
import mockApartments from "./mockApartments.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: mockApartments,
    };
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged in:", logged_in, "current:", current_user);
    return (
      <>
        <Header
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          logged_in={logged_in}
        />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentindex" component={ApartmentIndex} />
            <Route path="/apartmentshow/:id" component={ApartmentShow} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit/:id" component={ApartmentEdit} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
