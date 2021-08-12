export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENTBY: 'INCREMENTBY',
    DECREMENTBY: 'DECREMENTBY'
}
export const increment = () =>{
    return {
        type: ACTIONS.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: ACTIONS.DECREMENT
    }
}
export const incrementBy = (value) => {
    return {
        type: ACTIONS.INCREMENTBY,
        payload: value
    }
}
export const decrementBy = ( value ) => {
    return {
        type: ACTIONS.DECREMENTBY,
        payload: value
    }
}
