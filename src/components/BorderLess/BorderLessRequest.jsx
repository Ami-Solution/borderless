// External libraries
import React, { Component } from "react";
import { Form, Container, Header, Divider,  Popup, Button, Grid  } from 'semantic-ui-react';
import TockenSelect from "../CreateLoanRequest/TokenSelect/TokenSelect"
import "./BorderLess.css";


class BorderLessRequest extends Component {
    render() {
        return (
            <div className="main_container">
                <Container fluid textAlign='center'>
                    <p>I want to borrow 100 &nbsp;
                            <Popup trigger={<a>DAI</a>} flowing hoverable>
                                <Grid centered divided columns={3}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Basic Plan</Header>
                                        <p>
                                            <b>2</b> projects, $10 a month
                                        </p>
                                        <Button>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Business Plan</Header>
                                        <p>
                                        <b>5</b> projects, $20 a month
                                        </p>
                                        <Button>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Premium Plan</Header>
                                        <p>
                                        <b>8</b> projects, $25 a month
                                        </p>
                                        <Button>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>
                    &nbsp;
                        I will put in [100 REP] collateral for a one week period at a 10% interest rate. </p>
                     <TockenSelect />
                </Container>
            </div>
        );
    }
}

export default BorderLessRequest;
