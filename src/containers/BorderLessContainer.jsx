// External libraries
import React, { Component } from "react";
import { Form } from 'semantic-ui-react';

// Components
// import Investments from "../components/Investments/Investments";
// Contexts

import DharmaConsumer from "../contexts/Dharma/DharmaConsumer";
import BorderLessRequest from "../components/BorderLess/BorderLessRequest"

class BorderLessContainer extends Component {
    render() {
        return (
            <div className="">
                    <BorderLessRequest />
            </div>
            
        );
    }
}

export default BorderLessContainer;
