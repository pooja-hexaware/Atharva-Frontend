import { createSlice } from '@reduxjs/toolkit'


let initialMenu={
    _id:'',
    name:'',
    description:'',
    price:'',
    Toppings:[]
}
const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuCurrent : initialMenu,
    },
    reducers: {
       
        menuCurrentData(state, action)
        {
            state.menuCurrent = action.payload
            console.log("This has worked "+ state.menuCurrent)
        },
    },
})

export const {  menuCurrentData} = menuSlice.actions

export default menuSlice.reducer
