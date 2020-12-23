import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeMasterPage from './HomeMasterPage'
import HomeClientPage from './HomeClientPage'
import HeaderOfClient from './HeaderOfClient'
import MainHeader from './MainHeader'
import HeaderOfMasterSalon from './HeaderOfMasterSalon'
import MyServices from './MyServices'
import PriceList from './PriceList'
import RecordsMaster from './RecordsMaster'
import Sales from './Sales'
import RecordsClient from './RecordsClient'
import Catalog from './Catalog'
import Favorites from './Favorites'
import Home from './Home'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Submit from './Submit'
import { ReactSVG } from 'react-svg'
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Button,
    Col,
    InputGroup,
    InputGroupText,
} from 'reactstrap'

const SubmitBtn = styled.button`
    margin-top: 8px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    user-select: none;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 8px 13px;
    font-size: 15px;
    height: 40px;
    line-height: 24px;
    background: #0052ff;
    color: #fff;
    border: 1px solid transparent;

    &:hover {
        background: #6664f7;
    }
`

export default class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signIn: false,
            masterIcon: false,
            clientIcon: false,
            accessMaster: false,
            accessClient: false,
        }
    }

    logInMaster = (el) => {
        this.setState((state) => {
            return {
                masterIcon: true,
                clientIcon: false,
            }
        })
    }

    logInClient = (el) => {
        this.setState((state) => {
            return {
                clientIcon: true,
                masterIcon: false,
            }
        })
    }

    Sign = (e) => {
        if (this.state.signIn === false) this.setState({ signIn: true })
        else this.setState({ signIn: false })
    }

    Access = () => {
        if (this.state.masterIcon) {
            this.setState((state) => {
                return {
                    accessMaster: true,
                }
            })
        }
        if (this.state.clientIcon) {
            this.setState((state) => {
                return {
                    accessClient: true,
                }
            })
        }
    }

    render() {
        if (this.state.accessMaster) {
            return (
                <div className="Registration">
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/Home">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <Home />
                                </Route>
                                <Route path="/MyServices">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <MyServices />
                                </Route>
                                <Route path="/PriceList">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <PriceList />
                                </Route>
                                <Route path="/sales">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <Sales />
                                </Route>
                                <Route path="/RecordsMaster">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <RecordsMaster />
                                </Route>
                                <Route path="/">
                                    <HeaderOfMasterSalon
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="master.svg"
                                            />
                                        }
                                    />
                                    <HomeMasterPage />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            )
        } else if (this.state.accessClient) {
            return (
                <div className="Registration">
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/Home">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <Home />
                                </Route>
                                <Route path="/catalog">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <Catalog />
                                </Route>
                                <Route path="/sales">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <Sales />
                                </Route>
                                <Route path="/Favorites">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <Favorites />
                                </Route>
                                <Route path="/RecordsClient">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <RecordsClient />
                                </Route>
                                <Route path="/">
                                    <HeaderOfClient
                                        style={
                                            <ReactSVG
                                                role="img"
                                                src="client.svg"
                                            />
                                        }
                                    />
                                    <HomeClientPage />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            )
        } else {
            if (this.state.signIn === true) {
                return (
                    <div>
                        <MainHeader />
                        <Container className="registartion-page d-flex align-content-center justify-content-center">
                            <Card className="card-registration">
                                <CardHeader>
                                    <h3>Регистрация</h3>
                                </CardHeader>
                                <CardBody className="d-flex flex-column justify-content-center align-items-center">
                                    <Form className="row mb-2">
                                        <Col>
                                            <Button
                                                className="chosen-btn"
                                                onClick={this.logInClient}
                                            >
                                                <ReactSVG
                                                    role="img"
                                                    src="client.svg"
                                                />
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                className="chosen-btn"
                                                onClick={this.logInMaster}
                                            >
                                                <ReactSVG
                                                    role="img"
                                                    src="master.svg"
                                                />
                                            </Button>
                                        </Col>
                                    </Form>
                                    <Form>
                                        <LogIn placeholder="Почта" />
                                        <LogIn placeholder="Имя пользователя" />
                                        <LogIn placeholder="Пароль" />
                                        <Submit
                                            name="Зарегистрироваться"
                                            submit={this.Access}
                                        />
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <SignIn
                                        link={this.Sign}
                                        name="Уже есть аккаунт? Войти"
                                    />
                                </CardFooter>
                            </Card>
                        </Container>
                    </div>
                )
            } else {
                return (
                    <div>
                        <MainHeader />
                        <Container className="registartion-page d-flex align-content-center justify-content-center">
                            <Card className="card-registration">
                                <CardHeader>
                                    <h3>Вход</h3>
                                </CardHeader>
                                <CardBody className="d-flex flex-column justify-content-center align-items-center">
                                    <Form className="row mb-2">
                                        <Col>
                                            <Button
                                                className="chosen-btn"
                                                onClick={this.logInClient}
                                            >
                                                <ReactSVG
                                                    role="img"
                                                    src="client.svg"
                                                />
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                className="chosen-btn"
                                                onClick={this.logInMaster}
                                            >
                                                <ReactSVG
                                                    role="img"
                                                    src="master.svg"
                                                />
                                            </Button>
                                        </Col>
                                    </Form>
                                    <Form>
                                        <LogIn placeholder="Имя пользователя" />
                                        <LogIn placeholder="Пароль" />
                                        <Submit
                                            name="Вход"
                                            submit={this.Access}
                                        />
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <SignIn
                                        link={this.Sign}
                                        name="Еще нет учетной записи? Нажмите здесь"
                                    />
                                </CardFooter>
                            </Card>
                        </Container>
                    </div>
                )
            }
        }
    }
}
