
import {connect} from 'react-redux'
import { incrementCounter, decrementCounter, incrementIfOdd } from '../redux/actions';


const Counter =(props) => {
   
 
    return (
        <>
        Clicked: {props.count} times
        <button onClick={()=>props.handleIncrement()} style={{width:'50px', height: '50px'}}> + </button>
       

        <button onClick={()=>props.handleDecrement()}style={{width:'50px', height: '50px'}}> - </button>
        <button onClick={()=>props.handleincrementIfOdd()}style={{width:'150px', height: '50px'}}>increment If Odd</button>
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
        handleincrementIfOdd:()=>dispatch(incrementIfOdd())
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Counter)