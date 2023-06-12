import React from "react";

import User from "./User";


class UserListC extends React.Component {
    constructor(){
        super();
        this.state = {
            arr: [],
            search:''
        }
    }
    handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({arr:data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        this.handleClick()
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({search: e.target.value})
    }
    render(){
        const {search, arr} = this.state;
        const filteredArr = arr.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        return(
            <div>
                <div>
                    <input type="text" placeholder="Filter..." onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Get users</button>
                </div>
                {
                    filteredArr.map(item => {
                        return <User userinfo={item} key={item.id} />
                    })
                }
            </div>
        )
    }
}
export default UserListC;
