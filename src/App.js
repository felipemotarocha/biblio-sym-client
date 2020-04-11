import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import BookDetails from "./pages/book-details/book-details.component";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/book/:id" component={BookDetails} />
            </Switch>
        </div>
    );
}

export default App;
