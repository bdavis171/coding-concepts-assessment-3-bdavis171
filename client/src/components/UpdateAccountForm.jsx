import React, { Component } from 'react';


class UpdateAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: this.props.account.number,
            name: this.props.account.name,
            
         }
    }
    
    render() { 
        return ( 
            <div>
               
            </div>
         );
    }
}
 
export default UpdateAccountForm;