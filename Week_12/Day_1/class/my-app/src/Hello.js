import './Hello.css'
import React from 'react'
import HelloClass from './HelloClass'
const Hello = () => {
    const users = [{
        name: 'Mary',
        email: 'mary@gmail.com'
    }, 
    {
        name: 'John',
        email:'john@gmail.com' 
    },
    {
        name: 'David',
        email: 'david@gmail.com' 
    }]
    const returnusers = users.map(item => {
        return(
            <div>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Hello</h1>
            {
            returnusers
            }
      
            <HelloClass />
        </div>
    )
}
export default Hello