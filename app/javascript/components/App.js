import React, { Component }from "react";
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentEdit from "./pages/ApartmentEdit"
import Header from "./components/Header";
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments:[]
    };
  }

  createNewApartment = (newapartment) => {
    console.log(newapartment)
  }

  componentDidMount(){
    this.ApartmentIndex()
  }
  
  ApartmentIndex = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentsArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ apartments: apartmentsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
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
            <Route exact path="/" render={ (props) => <Home/>} />
            <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } />

            <Route path="/apartmentshow/:id" render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === +id)
                return <ApartmentShow apartment={ apartment } />
            }} />

            <Route path="/apartmentnew" render={ (props) => <ApartmentNew createNewApartment={ this.createNewApartment } />} />
            <Route path="/apartmentedit/:id" render={ (props) => <ApartmentEdit/>} />
            <Route render={ (props) => <NotFound/>} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
