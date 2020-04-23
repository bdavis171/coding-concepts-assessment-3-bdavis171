import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // refresh page
    refreshPage = () => {
        window.location.reload();
    }

    // withdraw $100 from balance
    // BONUS: withdraw the ammount the user enters
    handleWithdraw = async(event) => {
        const withdrawAmount = parseInt(prompt(`How much to withdraw from ${this.props.account.name}'s account?`));
        const accountData = {
            balance: this.props.account.balance - withdrawAmount
        };
        const response = await fetch(`/api/withdraw/${this.props.account.number}`,{
            method: "PUT",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(accountData)
        })
        this.refreshPage();
    }

    // deposit $100 into balance
    // BOUNS: deposit the amount the user enters
    handleDeposit = async(event) => {
        const depositAmount = parseInt(prompt(`How much to deposit in ${this.props.account.name}'s account?`));
        const accountData = {
            balance: this.props.account.balance + depositAmount
        };
        const response = await fetch(`/api/deposit/${this.props.account.number}`,{
            method: "PUT",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(accountData)
        })
        this.refreshPage();
    }

    // BONUS: delete an account
    handleDelete = async(event) => {
        if (window.confirm(`Are you sure you want to delete Account #${this.props.account.number}?`)){
            const response = await fetch(`/api/${this.props.account.number}`, {
                method: "DELETE",
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            });
            this.refreshPage();
        }
    }

    // display page
    render() { 
        return ( 
            <div>

                <fieldset>
                    <legend>{this.props.account.number}</legend>
                    <p>Name: {this.props.account.name}</p>
                    <p>Type: {this.props.account.type}</p>
                    <p>Balance: ${this.props.account.balance}</p>
                    <button onClick={this.handleWithdraw}>Withdraw</button>
                    <button onClick={this.handleDeposit}>Deposit</button>
                    <br/>
                    <button onClick={this.handleDelete}>Delete</button>
                    {/* BONUS: add a button that will display the update form */}
                    <Link to='/updateAccount'>
                        <button>Edit</button>
                    </Link>
                </fieldset>
            </div>
         );
    }
}
 
export default Account;