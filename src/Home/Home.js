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
import bgImage from './bgImage.jpg'
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { useNavigate } from 'react-router-dom';
import menuReducer from './store/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { menuCurrentData } from './store/menuSlice';


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
const Home =()=>{
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menu, setmenu] = useState([])
  const [toppings, settoppings] = useState([])
  const currentRestaurant = useSelector(state=>state.restaurant.currentRestaurant)
  console.log("Current Store", currentRestaurant);


  const fetchMenus = () => {
    axios.get("http://localhost:3000/store/"+currentRestaurant._id).then(response => {
      console.log(response.data[0].menu)
      setmenu(response.data[0].menu)
    })
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  function toppingsClick(menuItem)
  {   
    dispatch(menuCurrentData(menuItem))
    navigate("/toppings")
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
          
          menu?.map((menuItem)=>  {
            return(
              <React.Fragment >
      <CardContent>
        <Typography sx={{ fontSize: 18  }} color="text.primary" variant = "h3" gutterBottom fontWeight={"bold"}>
          {menuItem.name}
          <Typography style={{float:"right", height:"20px", marginRight:"1rem"}} gutterBottom>
            Amount
            <input style={{float:"right", width : "50px", height:"20px", marginLeft: '0.5rem'}} type = "text" pattern="^[1-9\b]+$" gutterBottom></input>
          </Typography>
        </Typography>
        <Typography color="text.primary" gutterBottom>
            {menuItem.description}
        <Button variant="contained" style={{backgroundColor: "#00008b", float:"right", marginRight:"1rem"}}>+ Add</Button>
        </Typography>
        <Typography sx={{ fontSize: 18  }}color = "#d2691e" variant = "h5" fontWeight={"bold"}>
          ${menuItem.price}
          <Button  onClick={()=>toppingsClick(menuItem)} variant="contained" style={{marginLeft: '2rem', backgroundColor: "#00008b"}}>+ Toppings</Button>
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
export default Home;