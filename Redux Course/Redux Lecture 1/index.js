import {createStore} from 'redux';
import { myCreateStore } from './myredux';
const postCountElement = document.querySelector(".post-count");

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

store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
const myStore = myCreateStore(reducer);

console.log(myStore);

console.log(store);

const unsubscribe = myStore.subscribe(() => {
    console.log(myStore.getState());
    postCountElement.innerText = myStore.getState().count;
})

myStore.subscribe(() => {
    console.log(myStore.getState());
})

postCountElement.innerText = myStore.getState().count;

myStore.dispatch({type: INCREMENT});
myStore.dispatch({type: DECREMENT});
myStore.dispatch({type: INCREASE_BY, payload: 15});
myStore.dispatch({type: DECREASE_BY, payload: 2});

// unsubscribe()

postCountElement.addEventListener('click', () => {
    store.dispatch({type: INCREMENT});
});
