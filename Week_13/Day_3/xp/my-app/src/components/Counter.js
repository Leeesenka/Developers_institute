
import {connect} from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/actions';


const Counter =(props) => {
   
 
    return (
        <>
        Clicked: {props.count} times
        <button onClick={()=>props.handleIncrement()} style={{width:'50px', height: '50px'}}> + </button>
       

        <button onClick={()=>props.handleDecrement()}style={{width:'50px', height: '50px'}}> - </button>
        </>

    )
}
const mapStateToProps = state =>{
    return {
        count: state.count
    }
}

const mapDispatchProps = dispatch =>{
    return{
        handleIncrement:()=>dispatch(incrementCounter()),
        handleDecrement:()=>dispatch(decrementCounter()),
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Counter)