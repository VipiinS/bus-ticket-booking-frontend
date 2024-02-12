import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice';
import BusSlice from './BusSlice';
import SeatSlice from './SeatSlice';



const store = configureStore({
    reducer:{
        auth:AuthSlice,
        bus:BusSlice,
        seat:SeatSlice
    }
});

export default store;