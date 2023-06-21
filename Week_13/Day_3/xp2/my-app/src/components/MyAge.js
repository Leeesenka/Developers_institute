
import {connect} from 'react-redux'
import {onAgeUp, onAgeDown} from '../redux/actions';


const MyAge =(props) => {
   
 
    return (
        <>
        Your age: {props.age}
        <button onClick={()=>props.handleUp()} style={{width:'50px', height: '50px'}}>Age UP</button>
       
        <button onClick={()=>props.handleDown()}style={{width:'50px', height: '50px'}}>Age Down</button>
        </>

    )
}
const mapStateToProps = state =>{
    return {
        age: state.age
    }
}

const mapDispatchProps = dispatch =>{
    return{
        handleUp:()=>dispatch(onAgeUp()),
        handleDown:()=>dispatch(onAgeDown()),
   
    }
}
export default connect(mapStateToProps, mapDispatchProps)(MyAge)