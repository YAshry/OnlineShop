import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {}
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        getUserData : (state,action) =>{
            state.user = action.payload
        }
    }

})