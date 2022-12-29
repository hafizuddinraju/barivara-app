import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from "./features/Rooms/roomsSlice";

export const store = configureStore({
    reducer:{
        rooms: roomsSlice
    }
})