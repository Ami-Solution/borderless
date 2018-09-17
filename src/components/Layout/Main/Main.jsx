// External libraries
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BorderLessContainer from "../../../containers/BorderLessContainer"

import "./Main.css";


class Main extends Component {
    render() {
        return (
            <main className="Main">
                    <Switch>
                        <Route path="/" exact={true} component={BorderLessContainer} />
                    </Switch>
            </main>
        );
    }
}

export default Main;
