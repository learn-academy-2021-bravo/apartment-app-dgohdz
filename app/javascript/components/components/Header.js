import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'reactstrap'


class Header extends Component {
    render (){
        const{
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
        return (
            <>
            <h1 className="welcome">Welcome To The Best Apartment App!</h1>
            { logged_in && <a href={ sign_out_route }>Sign Out</a> }
            { !logged_in && <a href={ sign_in_route }>Sign In</a> }
            <Navbar color="faded" light> 
                <NavLink to="/apartmentindex">This is a list of apartments.</NavLink>
            </Navbar>
            </>
        )
    }
}

export default Header