import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const styling = {
    width: "25%",
    margin: "auto",
    display: "block",
    textAlign: "center",
     border: "3px dotted teal",
    // float: "left",
    borderRadius: "50px",

}

const styling2 = {
  width: "50%",
  margin:"auto",
  alignItems:"center",
  justifyContent: "center",
  paddingTop: "25px",
  fontSize:"18px"
}

const AboutMe = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("visible");
    }
  }, [control, inView]);

  return ( 
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      
      >
      <h3 className="text-center py-4">About Me</h3>
      <h3 style={styling2}>
      Full-Stack Web Developer with a background in Management. Passionate about design, with a desire to be challenged and contribute to code-based technology. My current experience is in <b>HTML5, CSS3, JavaScript, React, GraphQL, jQuery, SQL, and Node</b>, and I am open to learning new languages and technologies. My goal is to become an effective and engaging part of a team that works to create user friendly experiences.
        <br></br><br></br>
     
      <br></br>
      In my spare time I enjoy being active and staying healthy. When I'm not out exploring, I take enjoyment in cooking, art, and photography. When I am out and about you can find me scuba diving, hiking, skiing or snowboarding, and checking off travel destinations on my bucket list!
      </h3>
      <br></br><br></br>
      <img style={styling} src='https://user-images.githubusercontent.com/95582357/198161370-d033b0a7-5f2d-4783-b13b-ac8b50634a87.png'/>
      
  
      
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <AboutMe />
  
    </div>
  );
}