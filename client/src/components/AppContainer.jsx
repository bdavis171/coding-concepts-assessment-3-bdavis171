import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import AccountList from './AccountList';
import AddAccountForm from './AddAccountForm';
import UpdateAccountForm from './UpdateAccountForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bankAccountList: []
         }
    }

    componentDidMount = () => {
        this.loadData();
    }

    // load data
    loadData = async() => {
        const response = await fetch('/api');
        const json = await response.json();
        console.table(json);
        this.setState({bankAccountList: json});
    }

    // add an account to database
    addAccount = async(newAccount) => {
        const response = await fetch('/api',{
            method: "POST",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newAccount)
        })
        const json = await response.json();
        console.table(json);
    }

    // display page
    render() { 
        return ( 
            <div>
                <Router>
                    <div className='container'>
                        <h1>Bank Account Manager</h1>

                        <div id="nav">
                            <Link to='/accountList'>List of Accounts</Link>
                            <Link to='/addAccountForm'>Add Account</Link>
                        </div>

                        <div id="pageDisplay">
                            <Route path='/accountList'><AccountList bankAccountList={this.state.bankAccountList}/></Route>
                            <Route path='/addAccountForm'><AddAccountForm addAccount={this.addAccount}/></Route>
                            
                        </div>
                    </div>
                </Router>
            </div>
         );
    }
}
 
export default AppContainer;