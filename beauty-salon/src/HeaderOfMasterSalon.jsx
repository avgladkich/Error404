import React from 'react'
import { ReactSVG } from 'react-svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class HeaderOfMasterSalon extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="HeaderOfMasterSalon">
                <Navbar сlassName="row" id="header-master" dark expand="md">
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
                            <Link to="/MyServices">
                                <NavLink>Мои услуги</NavLink>
                            </Link>
                        </NavItem>
                        <div class="vertical-line"></div>
                        <NavItem>
                            <Link to="/PriceList">
                                <NavLink>Прайс</NavLink>
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
                            <Link to="/RecordsMaster">
                                <NavLink>Записи</NavLink>
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
