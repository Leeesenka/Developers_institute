
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import thunk from 'redux-thunk';
// const logger = (store) => (next) =>(action) => {
//     console.log('state', store.getState());
//     console.log('action', action);
//     next(action)
// }
const store = createStore(reducer, applyMiddleware(thunk));


export default store;