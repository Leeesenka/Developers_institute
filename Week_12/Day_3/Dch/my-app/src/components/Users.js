import React from 'react'

class Users extends React.Component {
    constructor(){
        super()
        this.state={
            firstname: '',
            lastname: '',
            color: '',
            isgo: '',
            gender: ''
        }
    }
    // const [formData, setFormData ] = useState({})

    handleSubmit=(e)=>{
        e.preventDefault()
        const {firstname, lastname, color, gender, isgo} = this.state;
        const go = isgo ? 'Yes I am going': 'no way';
        console.log(firstname, lastname, color,gender, go)
    }
    handleChange=(e)=>{
        // console.log(e.target.checked)
        const value = (e.target.type === 'checkbox')
                                ? e.target.checked
                                : e.target.value
        this.setState({[e.target.name]:value})
        // setFormData({...formData, [e.target.name]:value})
      
    }
    render(){
        return(
            <>
            <h1>My Form</h1>
            <form onSubmit={this.handleSubmit}>
                First Name: <input type='text' name='firstname' onChange={this.handleChange}/><br/>
                {this.state.firstname}<br/>
                Last Name: <input type='text' name='lastname'onChange={this.handleChange}/><br/>
                {this.state.lastname}<br/>
                <select name='color' onChange={this.handleChange}>
                    <option value='Red'>Red</option>
                    <option value='Blue'>Blue</option>
                    <option value='Green'>Green</option>
                </select>
                <br/>
                <div onChange={this.handleChange}>
                    <input type='radio' value='Male' name='gender' /> Male
                    <input type='radio' value='Female' name='gender' /> Female
                    <input type='radio' value='Other' name='gender' /> Other

                </div>
                <br/>
                Is Going: <input type='checkbox' name='isgo' onChange={this.handleChange}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
      
            </>
        )
    }
}

export default Users;


let a = 'name'
let obj = {
    [a]: 'John'
}