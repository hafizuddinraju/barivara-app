import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from "./features/rooms/roomsSlice";



export const store = configureStore({
    reducer:{
        rooms: roomsSlice,
    }
})