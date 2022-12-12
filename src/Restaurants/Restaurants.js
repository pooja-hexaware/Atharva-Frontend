import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '@mui/material/Card'
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrentRestaurant } from './store/restaurantsSlice';
import { current } from '@reduxjs/toolkit';


const myStyle={
    backgroundImage: "url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
    height:'120vh',
    marginTop:'-80px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  const card = (
    <React.Fragment >
      <CardContent>
        <Typography sx={{ fontSize: 35, fontWeight:"bolder" }} color="white" variant = "h3" gutterBottom align="center">
          Good Food, Great Day
        </Typography>
        <Typography align = "center" color="white" >
            Our chefs at Wiwi make delicious food selections every week-you pick, we cook and deliver.
        </Typography>
      </CardContent>
    </React.Fragment>
  );
const Restaurants =()=>{
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([])
    const[currentRestaurantId, setCurrentRestaurantId] = useState('')

  const fetchRestaurants = () => {
    axios.get("http://localhost:3000/store").then(response => {
    //   console.log( "Get all restaurants", response.data)
      setRestaurants(response.data)
      console.log( "Get all restaurants", response.data)
    })
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  function viewMenuClick(menu)
  {   
    console.log(menu)
    dispatch(addCurrentRestaurant(menu));
    navigate("/menu")
  }
    return (
        <>
            <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="home" style={{justifyContent: "flex-start", fontWeight:"bolder", fontSize:"24px"}}>WIWI Food App (Capstone)</Navbar.Brand>
          <Container >
          <Button  variant="contained" style={{justifyContent: "flex-start", fontSize:"12px", width:"200px", backgroundColor: "#00008b", float:"right"}}>Your Cart</Button>
          </Container>
        </Container>
      </Navbar>
      
      
      <div style={myStyle}>
        <br/><br/>
      <Container>
          <Card style={{
          background:"cover",
          backgroundColor: "#0d6efd",
          marginLeft:"12rem",
          marginRight:"12rem"
        }} gutterBottom >{card} </Card>
      </Container>  
      <Stack backgroundColor="white" marginLeft={"10rem"} marginRight={"10rem"} marginTop={"2rem"}> 
        {
          
          restaurants?.map((menuItem)=>  {
            return(
              <React.Fragment >
      <CardContent>
        <Typography sx={{ fontSize: 18  }} color="red" variant = "h3" gutterBottom fontWeight={"bold"}>
          {menuItem.name}
        </Typography>
        <Typography color="text.primary" gutterBottom>
            {menuItem.address +" "+ menuItem.pin_code}
        <Button onClick ={()=>viewMenuClick(menuItem)} variant="contained" style={{backgroundColor: "#00008b", float:"right", marginRight:"1rem"}}>View Menu</Button>
        </Typography>
        <Typography color="text.primary"  gutterBottom>
            Store : {menuItem.store_contact}
         </Typography>
         <Typography color="text.primary" gutterBottom>
            Kitchen : {menuItem.kitchen_contact}
         </Typography>
      </CardContent>
    </React.Fragment>
            )
          })}
          </Stack>
      </div>

        </>
    )
}
export default Restaurants;