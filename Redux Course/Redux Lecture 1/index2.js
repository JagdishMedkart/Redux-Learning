import {createStore} from "redux";

let reduxState = {
    count: 0,
    name: "JD",
    age: 21,
};

function reducer(state, action) {
    if (action.type === "count/increment") {
        return { ...state, count: state.count + 1 };
    }
    else if (action.type === "count/decrement") {
        return { ...state, count: state.count - 1 };
    }
    else if (action.type === "count/incrementBy") {
        return {...state, count: state.count + action.payload}
    }
    return state;
}

console.log(reduxState);
reduxState = reducer(reduxState, {type: "count/increment"});
console.log(reduxState);
reduxState = reducer(reduxState, {type: "count/increment"});
console.log(reduxState);
reduxState = reducer(reduxState, {type: "count/decrement"});
console.log(reduxState);
reduxState = reducer(reduxState, {type: "count/incrementBy", payload: 5});
console.log(reduxState);