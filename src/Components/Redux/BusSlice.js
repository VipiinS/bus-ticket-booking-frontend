import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
        busId: "",
        registrationNumber: "",
        capacity: 0,
        type: "Bus",
        fare: 0,
        departureTime: "",
        destinationTime: "",
        availableSeats: 0,
        travelTime: "",
        seatsSelected:[]
}

const busSlice = createSlice({
    name:'bus',
    initialState:InitialState,
    reducers:{
        selectBus(state,action){
            
        }
    }
})

export const {selectBus} = busSlice.actions;
export default busSlice.reducer;