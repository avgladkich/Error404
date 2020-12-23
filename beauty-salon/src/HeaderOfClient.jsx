import React from 'react'
import { ReactSVG } from 'react-svg'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class HeaderOfClient extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="HeaderOfClient">
                <Navbar сlassName="row" id="header-client" dark expand="md">
                    <NavbarBrand className="col">
                        <Link to="/Home">
                            <ReactSVG role="img" src="logo.svg" />
                        </Link>
                    </NavbarBrand>
                    <Nav
                        className="col-6 justify-content-around"
                        id="nav-link"
                        navbar
                    >
                        <NavItem>
                            <Link to="/catalog">
                                <NavLink>Каталог</NavLink>
                            </Link>
                        </NavItem>
                        <div class="vertical-line"></div>
                        <NavItem>
                            <Link to="/sales">
                                <NavLink>Акции</NavLink>
                            </Link>
                        </NavItem>
                        <div class="vertical-line"></div>
                        <NavItem>
                            <Link to="/Favorites">
                                <NavLink>Избранное</NavLink>
                            </Link>
                        </NavItem>
                        <div class="vertical-line"></div>
                        <NavItem>
                            <Link to="/RecordsClient">
                                <NavLink>Мои Записи</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav className="col justify-content-end" navbar>
                        <NavItem>
                            <Link to="/">
                                <NavLink>{this.props.style}</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
