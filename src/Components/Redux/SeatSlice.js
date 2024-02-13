import {createSlice} from '@reduxjs/toolkit'

const seatSlice = createSlice({
    name:"seats",
    initialState:[],
    reducers:{
        setAllSeats(state,action){
            return action.payload
        }
    }
})

export const {setAllSeats} = seatSlice.actions;
export default seatSlice.reducer;