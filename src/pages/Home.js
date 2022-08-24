// import { useSpring, animated } from 'react-spring';
import React, { useState } from "react";

 
// function App() {
//   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
//   return <animated.div style={props}>I will fade in</animated.div>
// }
const HomePage = (props) => {
    return (
      <div>
        <h1 style={{fontSize:"70px", color:"blue", textAlign: "center"}}>Hello</h1>
        <p style={{textAlign:"center"}}> Welcome to my page.<br></br>
        The Home page is still currently being designed. <br>
        </br>Check out the links in the navbar!</p>
      </div>
    )
  }
  
  export default HomePage
