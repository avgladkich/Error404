import React from 'react'
import { ReactSVG } from 'react-svg'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            setIsOpen: false,
        }
    }

    Toggle = () => {
        this.setState((state) => {
            return {
                setIsOpen: !state.isOpen,
            }
        })
    }
    render() {
        return (
            <div>
                <Navbar сlassName="row" id="main-header" dark expand="md">
                    <NavbarBrand className="col">
                        <Link to="/">
                            <ReactSVG role="img" src="logo.svg" />
                        </Link>
                    </NavbarBrand>
                    <Nav
                        className="col-6 justify-content-around"
                        id="nav-link"
                        navbar
                    >
                        <NavItem>
                            <Link to="/popular">
                                <NavLink>Популярное</NavLink>
                            </Link>
                        </NavItem>
                        <div class="vertical-line"></div>
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
                    </Nav>
                    <Nav className="col justify-content-end" navbar>
                        <NavItem>
                            <Link to="/registration">
                                <NavLink>
                                    <ReactSVG role="img" src="signIn.svg" />
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
