import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { increment, decrement } = actions;
const initialState = 0;

const counterReducer = createReducer( initialState, {
    [increment.type]: state => state + 1,
    [decrement.type]: state => state - 1
} )


export default counterReducer;