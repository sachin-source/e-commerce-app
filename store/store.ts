import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        // cart : cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;