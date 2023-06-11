import React from "react";
class UserClass extends React.Component{
    
    render(){
        const {userinfo}= this.props;
            const {name, email, website, username, id} = userinfo
            return (
        <div>
                <h2> Name: {name}</h2>
                <p>Email:{email}</p>
                <p>website:{website}</p>
                <p>username:{username}</p>
                <img src={`https://robohash.org/${id}`}></img>
                <p>id: {id}</p>
                
            </div>
            )
    }

}

export default UserClass