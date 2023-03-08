import {createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

//redux store is used to manage state app-wide and cross component wide
//to install use npm install react-redux
// to use configureStore and createSlice, npm install react-redux @reduxjs/toolkit
// <Provider store={store}></Provider> declared in index.js to provide state application wide

/*let reducerFunction =(state={counter:0},action)=>{
    if(action.type=='inc'){
        return {counter:state.counter+1}
    }else if(action.type=='dec'){
        return {counter:state.counter-1}
    }
    return state;
}
let store = createStore(reducerFunction);
*/
let initialState = {counter:10,step:5};
let counterSlice = createSlice({
    name:'Counter Reducer',
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
    }
})

let store = configureStore({
    reducer:{counter:counterSlice.reducer}
})


export const counterActions = counterSlice.actions;

export default store;