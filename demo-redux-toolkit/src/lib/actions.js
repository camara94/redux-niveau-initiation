import { createAction } from '@reduxjs/toolkit';

const actions = {
    increment: createAction('INCREMENT'),
    decrement: createAction('DECREMENT')
}

export default actions;