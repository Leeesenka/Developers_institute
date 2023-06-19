import {connect} from 'react-redux'
import { changePropOne } from '../redux/actions'
import Counter from './Counter'


const Test = (props) => {
    return(
        <>
        <h1>{props.b} {props.c}</h1>
        <button onClick={()=>props.setTitle('Test Title')}>Change Title</button>
       <div>
        <button onClick={props.change}>Change Prop One</button>
       </div>
        </>
    )
}
const mapStateToProps =(state)=>{
return{
   b: state.property_two,
   c: state.property_one
}
}
const mapDispatchProps =dispatch=>{
    return{
        change: ()=> dispatch(changePropOne('hello from test'))
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Test)