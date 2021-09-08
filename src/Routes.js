import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home.jsx';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path='/'> <Home /> </Route>
            </Switch>
        </BrowserRouter>
    )
}