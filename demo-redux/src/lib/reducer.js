import { ACTIONS } from "./actions";
const { INCREMENT, DECREMENT, INCREMENTBY, DECREMENTBY } = ACTIONS;

export const reducer = ( state=1,  action) => {
    switch( action.type ) {
       case INCREMENT: return state + 1;
       case DECREMENT: return state - 1;
       case INCREMENTBY: return state + action.payload;
       case DECREMENTBY: return state - action.payload;
       default: return state;
    }
}

export default reducer;
