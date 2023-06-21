import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import thunk from 'redux-thunk';
const logger = (store) => (next) =>(action) => {
    console.log('caught in the middleware', store.getState());
 
    next(action)
}
const store = createStore(reducer, applyMiddleware(logger));


export default store;