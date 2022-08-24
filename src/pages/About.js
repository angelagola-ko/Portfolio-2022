import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const styling = {
    width: "20%",
    margin: "0px 30px 0px 0px",
    border: "3px solid purple",
    float: "left",
    borderRadius: "25%",

}

const styling2 = {
  width: "75%",
  display:"flex"
}
const AboutMe = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
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
      <h1 className="text-center py-4">Angela Gola</h1>
      <img style={styling} src='https://user-images.githubusercontent.com/95582357/185797558-6e71c3af-224a-4415-9b05-232a32c79361.png'/>
      <h3 style={styling2}>Previous Restaurant Events & Operations Manager turned Full-Stack Web Developer 2022. 
        With a desire to be challenged and contribute to code-based technology, I had to leave the mundane world of food & beverage management behind! 
        <br></br><br></br>
      My current experience is in HTML5, CSS3, JavaScript, React, jQuery, SQL, and Node, and I am open to learning new languages and technologies.
      Extremely happy with my career change and excited for future opportunities and advancements in the industry.<br>
      </br><br></br>
      In my spare time I enjoy being active and staying healthy. When I'm not out exploring, I take enjoyment in cooking, art, and photography. When I am out and about you can find me scuba diving, hiking, skiing or snowboarding, and checking countries off of my bucket list!
      </h3>
      <br></br><br></br>
      
  
      
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