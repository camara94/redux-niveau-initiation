import { configureStore } from "@reduxjs/toolkit";
import actions from "./actions";
import counterReducer from "./reducer";

const { increment, decrement } = actions;

const store = configureStore( {
    reducer: counterReducer
} );

console.log(store.getState());
store.dispatch( increment() )
store.dispatch( increment() )
store.dispatch( increment() )
store.dispatch( increment() )
console.log(store.getState());


export default store;