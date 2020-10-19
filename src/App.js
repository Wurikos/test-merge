import React from "react";
import Index from "pages/index";
import Card from "pages/card";
import Te from "pages/te";
import Te1 from "pages/te1";
import Page4041 from "pages/page4041";
import Index1 from "pages/index1";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/card' component={Card}/>
			<Route exact path='/te' component={Te}/>
			<Route exact path='/te1' component={Te1}/>
			<Route exact path='/4041' component={Page4041}/>
			<Route exact path='/index1' component={Index1}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
