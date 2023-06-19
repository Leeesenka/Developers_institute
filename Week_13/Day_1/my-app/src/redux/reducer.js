const initState = {
    property_one: 'Hello from Store',
    property_two: 'hey',
    count: 0
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'PROPS_ONE':
            return {
                ...state, 
                property_one: action.payload
            }
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
