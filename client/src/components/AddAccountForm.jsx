import React, { Component } from 'react';


class AddAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0,
            name: '',
            type: '',
            balance: 0

         }
    }



    // handle changes
    handleChanges = (event) => {
        if (event.target.name === 'number'){
            this.setState({number: event.target.value});
        }
        else if (event.target.name === 'name'){
            this.setState({name: event.target.value});
        }
        else if (event.target.name === 'type'){
            this.setState({type: event.target.value});
        }
        else if (event.target.name === 'balance'){
            this.setState({balance: event.target.value});
        }
    }

    // handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let newAccount = {
            number: this.state.number,
            name: this.state.name,
            type: this.state.type,
            balance: this.state.balance
        };
        this.props.addAccount(newAccount);
        // return to the account list
        window.location.replace('/accountList');
    }
    
    // display page
    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add An Account</legend>
                        <div className="form-group">
                            <label htmlFor="number">Account Number:</label>
                            <input type="number" name='number' id='number' value={this.state.number} onChange={this.handleChanges}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Account Name:</label>
                            <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChanges}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="type">Account Type:</label>
                            <select name="type" id="type" onChange={this.handleChanges}>
                                <option value={this.state.type}>--</option>
                                <option value="Checking">Checking</option>
                                <option value="Saving">Saving</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="balance">Account Balance:</label>
                            <input type="number" name='balance' id='balance' value={this.state.balance} onChange={this.handleChanges}/>
                        </div>

                        <div className="form-group">
                            <button onClick={this.handleSubmission}>Add Account</button>
                        </div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default AddAccountForm;