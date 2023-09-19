import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/userDataSlice";

export const store = configureStore({
    reducer: {
        user: userDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch