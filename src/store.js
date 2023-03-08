import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './Components/nameSlice'
const store = configureStore({
    reducer:{
        myDatas:nameReducer,
    }
})

export default store;