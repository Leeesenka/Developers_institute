import { useState, useEffect } from "react";
import User from "./User";
const UserList = (props) => {
    const [arr, setArr] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArr(data)
       
        })
        .catch(err => {
            console.log(err)
        })
    }
      componentDidMount = () => {
        this.handleClick()
      }
    return(
        <div>
 {
                arr.map(item => {
                    return <User userinfo = {item} key = {item.id} />
                })
            }
        </div>
    )
}
export default UserList