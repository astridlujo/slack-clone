import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header'

const App = () => {
    return (
        <div className="app">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact >
                            <Header />
                        </Route>
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default App;