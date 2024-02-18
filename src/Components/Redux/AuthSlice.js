import {createSlice} from '@reduxjs/toolkit'

const InitialState = {
    userName: "",
    email:"",
    jwtToken: "",
    isAuthenticated: false,
    error: "",
    expirationTime: null,
    ROLE: [],
}

const authSlice = createSlice({
    name:'auth',
    initialState:InitialState,
    reducers:{
        addToken(state,action){
            const payloadData = action.payload;
            state.userName = payloadData.username;
            state.email = payloadData.email;
            state.ROLE.push(payloadData.ROLE);
            state.isAuthenticated = true;
            state.jwtToken = payloadData.jwtToken;
        },
        removeUser(state,action){
            state = InitialState;
        }
    }
})  

export const {addToken} = authSlice.actions;
export default authSlice.reducer;