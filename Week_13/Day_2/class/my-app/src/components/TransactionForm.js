import React from 'react';
import { connect } from 'react-redux';
import { insert, update, delete1, updateIndex } from '../redux/actions';  


class TransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
        }
    }

    handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox')
            ? event.target.checked
            : event.target.value
        this.setState({ [event.target.name]: value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { accountNumber, FSC, name, amount } = this.state;
        console.log(accountNumber, FSC, name, amount);
    
        const transaction = {
            accountNumber,
            FSC,
            name,
            amount
        }
    
        this.props.insert(transaction); 
    
        this.setState({
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
        });
    }
    
    handleDelete = (index) => {
        const transaction = this.props.list[index];
        if (transaction) {
          this.props.delete1(transaction);
        }
      };
      
    handleEdit = (index) => {
        let transaction = this.props.list[index];
        if (transaction) {
            this.setState({ 
                accountNumber: transaction.accountNumber, 
                FSC: transaction.FSC, 
                name: transaction.name, 
                amount: transaction.amount
            });
            this.props.updateIndex(index);
        } 
    }
    
    
    render() {
        return (
            <div>
                <h1>Financial Transactions:</h1>
                <form onSubmit={this.handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    Account Number: <input style={{ width: '200px' }}
                        type="text"
                        name='accountNumber'
                        value={this.state.accountNumber}
                        onChange={this.handleInputChange}
                    />
                    FSC: <input style={{ width: '200px' }}
                        type="text"
                        name='FSC'
                        value={this.state.FSC}
                        onChange={this.handleInputChange}
                    />
                    Name: <input style={{ width: '200px' }}
                        type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    Amount: <input style={{ width: '200px' }}
                        type="text"
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleInputChange}
                    />
                    <button style={{ width: '70px' }} type='submit'>Submit</button>
                </form>
          
                <div className='but'>
                    {this.props.list.length !== 0 && (
                        <table>
                        <thead>
                            <tr>
                            <th>account</th>
                            <th>fsh</th>
                            <th>name</th>
                            <th>amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.list.map((element, index) => (
                            <tr key={index}>
                                <td>{element.accountNumber}</td>
                                <td>{element.FSC}</td>
                                <td>{element.name}</td>
                                <td>{element.amount}</td>
                                <td>
                                <button onClick={() => this.handleEdit(index)}>Edit</button>
                                <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    )}
                    </div>

                                            
                                </div>
                            )
                        }
                    }

// export default TransactionForm;
const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        insert: (transaction) => dispatch(insert(transaction)),
        update: (transaction) => dispatch(update(transaction)),
        delete1: (transaction) => dispatch(delete1(transaction)),
        updateIndex: (transaction) => dispatch(updateIndex(transaction))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
