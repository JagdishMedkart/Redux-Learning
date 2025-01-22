import {createStore} from 'redux';

let initialState = {
    count: 0,
    name: "JD",
    age: 21,
};

const INCREMENT = "count/increment";
const DECREMENT = "count/decrement";
const INCREASE_BY = "count/increaseBy";
const DECREASE_BY = "count/decreaseBy";

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INCREASE_BY:
            return {...state, count: state.count + action.payload};
        case DECREASE_BY:
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
}

store = createStore(reducer);

console.log(store);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: INCREMENT});
store.dispatch({type: DECREMENT});
store.dispatch({type: INCREASE_BY, payload: 15});
store.dispatch({type: DECREASE_BY, payload: 2});