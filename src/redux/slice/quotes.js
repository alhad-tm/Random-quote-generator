import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes=createAsyncThunk("fetchQuotes",async()=>{
    const response=await axios.get("http://api.quotable.io/random");
    console.log(response.data,"axios data");
    return response.data;
})


const quoteSlice=createSlice({
    name:"quotes",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuotes.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchQuotes.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchQuotes.rejected,(state,action)=>{
           console.log("Error",action.payload);
           state.isError=true;
        })
    }
})
export default quoteSlice.reducer;