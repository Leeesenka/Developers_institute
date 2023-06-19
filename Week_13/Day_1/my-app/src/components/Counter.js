import {useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter =(props) => {
    // const[count, setCount]= useState(0)
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    // return (
    //     <>
    //     <button onClick={()=>props.handleIncrement()}> + </button>
    //     {props.count}

    //     <button onClick={()=>props.handleDecrement()}> - </button>
    //     </>

    // )
    return(
        <>
      <button onClick={()=>dispatch(incrementCounter())}> + </button>
   {count}
    
        <button onClick={()=>dispatch(decrementCounter())}> - </button>
        </>
    )
}
// const mapStateToProps = state =>{
//     return {
//         count: state.count
//     }
// }

// const mapDispatchProps = dispatch =>{
//     return{
//         handleIncrement:()=>dispatch(incrementCounter()),
//         handleDecrement:()=>dispatch(decrementCounter()),
//     }
// }
// export default connect(mapStateToProps, mapDispatchProps)(Counter)
export default Counter