import React, { Component } from "react";
import { Dropdown, Popup, Button, Grid  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const friendOptions = [
    {
      key: 'AUGUR',
      text: 'Jenny Hess',
      value: 'Jenny Hess'
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu'
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano'
    }
  ]
  
class TokenSelect extends Component {
    render() {
        
        const { name, onChange, defaultValue, tokens } = this.props;

        console.log('Tockens :', this.props);

        return (
            <div>

                <Popup wide trigger={<Button content='Are you the one?' />} on='click'>
                        <Grid divided columns='1'>
                        <Grid.Column>
                        <Dropdown 
                                placeholder='Choose tocken' 
                                closeOnBlur 
                                selection options={friendOptions} 
                            />        
                        </Grid.Column>
                        <Grid.Column>
                            <Popup
                            trigger={<Button color='green' content='Red Pill' fluid />}
                                content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
                                position='top center'
                                size='tiny'
                                inverted
                            />
                        </Grid.Column>
                        </Grid>
                    </Popup>
            </div>
        );
    }
}

export default TokenSelect;
