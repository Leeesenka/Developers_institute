const initState = {

    age: 20
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'UPP_AGE':
            return {
                ...state, 
                age: state.age + 1
            }
        case 'DOWN_AGE':
            return {
                ...state, 
                age: state.age - 1
            }
        default:
            return {
                ...state
            }
    }
}