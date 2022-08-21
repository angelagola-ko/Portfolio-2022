// import { useSpring, animated } from 'react-spring';
import React, { useState } from "react";

 
// function App() {
//   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
//   return <animated.div style={props}>I will fade in</animated.div>
// }
const HomePage = (props) => {
    return (
      <div>
        <h1 style={{fontSize:"70px", color:"blue", textAlign: "center"}}>This is the Home page</h1>
      </div>
    )
  }
  
  export default HomePage
