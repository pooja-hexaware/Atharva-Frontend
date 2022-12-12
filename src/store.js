import menuReducer from './Home/store/menuSlice'
import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './Restaurants/store/restaurantsSlice'
export default configureStore({
    reducer: {
        menu:menuReducer,
        restaurant:restaurantReducer,
    },
})
