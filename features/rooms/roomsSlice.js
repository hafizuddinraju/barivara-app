import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "mongoose";
import { useState } from "react";
import { getRooms } from "../../lib/helper";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async()=>{
    
const res = await getRooms();
if(res){
    return res

}


})

const roomsSlice = createSlice({
    name:'rooms',
    initialState:{
        isLoading:false,
        rooms:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRooms.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchRooms.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.rooms = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRooms.rejected, (state,action)=>{
            state.isLoading = false;
            state.rooms = [];
            state.error = action.error.message;
        })
    }
})
export default roomsSlice.reducer