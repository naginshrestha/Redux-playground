import { createSlice } from '@reduxjs/toolkit'

const initialState={
    myData:[]
}

const nameSlice = createSlice({

    name:"List",
    initialState,
    reducers:{
        setMydata:(state,{payload})=>{
            state.myData=[...state.myData,payload]
        }

    }

    
})

const {reducer,actions} =nameSlice;
export const{setMydata} = actions;
export default reducer;
