import {createSlice} from '@reduxjs/toolkit'
const InitialState = {
    fetchedSeats:[],
    selectedSeats:[]
}  

const seatSlice = createSlice({
    name:"seats",
    initialState:InitialState,
    reducers:{
        setAllSeats(state,action){
            state.fetchedSeats=action.payload
        },
        selectSeat(state,action){
            const seatNumber = action.payload
            const isSelected = state.selectedSeats.includes(seatNumber);
            if (isSelected) {
                // Seat is already selected, so we remove it
                state.selectedSeats = state.selectedSeats.filter(seat => seat !== seatNumber);
            } else {
                // Seat is not selected, add it
                state.selectedSeats.push(seatNumber);
            }
        }
    }
})

export const {setAllSeats,selectSeat} = seatSlice.actions;
export default seatSlice.reducer;