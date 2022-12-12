import {createSlice} from '@reduxjs/toolkit'
let initialRestaurant={
    _id:"",
    name:"",
    address:"",
    pin_code:"",
    store_contact:"",
    kitchen_contact:"",
    menu:[]
}

const menuSlice = createSlice({
  name: 'restaurant',
  initialState: {
      currentRestaurant : initialRestaurant,
  },
  reducers: {
     
      addCurrentRestaurant(state, action)
      {
          state.currentRestaurant = action.payload;
          console.log("This has worked "+ state.currentRestaurant)
      },
  },
})

export const {  addCurrentRestaurant} = menuSlice.actions

export default menuSlice.reducer