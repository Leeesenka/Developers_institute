
const User = (props)=> {
    console.log(props);
    const {name, email, website, username, photo, id} = props
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

export default User