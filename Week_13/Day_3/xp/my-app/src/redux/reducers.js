const initState = {

    count: 0
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'INCRENENT_COUNTER':
            return {
                ...state, 
                count: state.count + 1
            }
        case 'DECRENENT_COUNTER':
            return {
                ...state, 
                count: state.count - 1
            }
        default:
            return {
                ...state
            }
    }
}