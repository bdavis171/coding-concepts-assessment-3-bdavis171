import React, { Component } from 'react';


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
    handleWithdraw = async(event) => {
        const accountData = {
            number: this.props.account.number,
            name: this.props.account.name,
            type: this.props.account.type,
            balance: this.props.account.balance - 100
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
    handleDeposit = async(event) => {
        const accountData = {
            number: this.props.account.number,
            name: this.props.account.name,
            type: this.props.account.type,
            balance: this.props.account.balance + 100
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
                </fieldset>
            </div>
         );
    }
}
 
export default Account;