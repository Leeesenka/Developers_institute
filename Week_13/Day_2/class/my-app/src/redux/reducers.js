export const INSERT = 'INSERT';
export const UPDATE1= 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE-INDEX';

const initState = {
    list: [],
    currentIndex: -1
}

export const reducer = (state = initState, action = {}) => {
        switch (action.type) {
            case 'INSERT':
                console.log("reducer insert", action.payload);
                const newstate = {
                    ...state,
                    list: [...state.list, action.payload],
                };
                console.log("new state", newstate);
                return newstate
            case 'UPDATE1':
                let list = [...state.list];
                list[state.currentIndex] = action.payload;
                return {
                    ...state,
                    list: list
                };
            case 'DELETE':
                console.log("reducer delete", action.payload);
                return {
                    ...state,
                    list: state.list.filter(transaction => transaction.accountNumber !== action.payload.accountNumber)
                };
                  
                
            case 'UPDATE_INDEX':
                return {
                    ...state,
                    currentIndex: action.payload
                };  
            default:
                return {
                    ...state
                }
        }
    }