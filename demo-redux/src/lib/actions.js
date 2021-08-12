const INCREMENT =  {
    type: 'INCREMENT',
    payload: {}
};
const DECREMENT = {
    type: 'DECREMENT',
    payload: {}
}

export const increment = () =>{
    return {
        type: INCREMENT.type
    }
}

export const decrement = () => {
    return {
        type: DECREMENT.type
    }
}
