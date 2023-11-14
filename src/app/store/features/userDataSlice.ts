import { createSlice } from "@reduxjs/toolkit";

interface IUserData {
    id: number;
}

const initialState: IUserData  = {
    id: 0,
}

export const userDataSlice = createSlice({
    'name': 'userData',
    initialState,
    reducers: {
        userIdStatement: (state, action) => {
            state.id = action.payload;
            console.log(state.id);
            
        }
    }
})

export const { userIdStatement } = userDataSlice.actions;
export default userDataSlice.reducer;