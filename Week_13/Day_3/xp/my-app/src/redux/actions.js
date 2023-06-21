export const incrementCounter=()=> (dispatch, getState)=>{
    console.log(getState())
    setTimeout(()=>{
        dispatch({type: 'INCRENENT_COUNTER'})
    }, 5000)
  
    // return{
    //     type: 'INCRENENT_COUNTER'
    // }
}
export const decrementCounter=()=>{
    return{
        type: 'DECRENENT_COUNTER'
    }
}
export const incrementIfOdd=()=>(dispatch, getState)=>{
    const { count } = getState(); 
    
    if(count % 2 !== 0){
        dispatch({type: 'INCRENENT_COUNTER'});
    }
}
