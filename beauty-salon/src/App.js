import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Popular from './Popular'
import Catalog from './Catalog'
import Sales from './Sales'
import Registration from './Registration'
import MainHeader from './MainHeader'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/popular">
                                <MainHeader />
                                <Popular />
                            </Route>
                            <Route path="/catalog">
                                <MainHeader />
                                <Catalog />
                            </Route>
                            <Route path="/sales">
                                <MainHeader />
                                <Sales />
                            </Route>
                            <Route path="/registration">
                                <Registration />
                            </Route>
                            <Route path="/">
                                <MainHeader />
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
