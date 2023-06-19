export const  changePropOne = (value)=>{
    return{
        type: 'PROPS_ONE',
        payload: value
    }
}
export const changePropTwo = (value)=>{
    return{
        type:'PROPS_TWO'
    }
}

export const incrementCounter=()=>{
    return{
        type: 'INCRENENT_COUNTER'
    }
}
export const decrementCounter=()=>{
    return{
        type: 'DECRENENT_COUNTER'
    }
}