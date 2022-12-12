import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/Home";
import Restaurants from "./Restaurants/Restaurants";
import Toppings from './Toppings/Toppings'

function App() {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Restaurants/>}/>
		<Route exact path ="/menu" element={<Home/>}/>
		<Route exact path="/toppings" element={<Toppings/>}/>
	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
