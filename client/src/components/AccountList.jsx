import React, { Component } from 'react';
import Account from './Account';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import UpdateAccountForm from './UpdateAccountForm';

class AccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // display page
    render() { 
        return ( 
            <div>
                <h3>List of Accounts</h3>
                <div className='displayAccounts'>
                {this.props.bankAccountList.map(
                    (account) => {
                        return(
                            <div key={account._id} >
                              
                                <Account account={account}/>
                                <Route path='/updateAccount'><UpdateAccountForm /></Route>
                                
                            </div>
                        )
                    }
                )}
                </div>
            </div>
         );
    }
}
 
export default AccountList;