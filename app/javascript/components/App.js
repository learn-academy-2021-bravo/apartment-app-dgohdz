import React from "react"
import Header from "./components/Header"
// import PropTypes from "prop-types"




class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged in:", logged_in, "current:", current_user);
    return (
      <>
        <Header sign_in_route={ sign_in_route } sign_out_route={ sign_out_route } logged_in={ logged_in }/>
      </>
    );
  }
}

export default App
