import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';
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

        return (
            <div>
                <Dropdown 
                    placeholder='Choose tocken' 
                        closeOnBlur 
                        selection options={friendOptions} 
                    />        
            </div>
        );
    }
}

export default TokenSelect;
