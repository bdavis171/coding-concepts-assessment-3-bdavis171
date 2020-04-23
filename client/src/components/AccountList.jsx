import React, { Component } from 'react';
import Account from './Account';

class AccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h3>List of Accounts</h3>
                {this.props.bankAccountList.map(
                    (account) => {
                        return(
                            <div key={account._id}>
                                <Account account={account}/>
                            </div>
                        )
                    }
                )}
            </div>
         );
    }
}
 
export default AccountList;