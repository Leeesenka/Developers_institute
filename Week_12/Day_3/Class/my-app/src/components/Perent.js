const Parent = (props) => {
    console.log(props)
    if(props.username === 'admin'){
        return <h1> Dashboard</h1>
    }
    return  props.children

        // <>
        // <h1>Parent</h1>
        // </>
    
}
export default Parent