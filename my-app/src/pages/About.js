import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

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
      <h1>Angela Gola</h1>
      <h3>Previous Restaurant Events & Operations Manager turned Full-Stack Web Developer 2022. 
        With a desire to be challenged and contribute to code-based technology, I had to leave the mundane world of food & beverage management behind! 
        
      My current experience is in HTML5, CSS3, JavaScript, React, jQuery, SQL, and Node, and I am open to learning new languages and technologies.

      Extremely happy with my career change and excited for future opportunities and advancements in the industry.</h3>
      <br></br><br></br>
      
      <img src={require(`../images/Resume1.png`)} alt="Resume"/>
      <img src={require(`../images/Resume2.png`)} alt="Resume"/>
      <img src={require(`../images/Resume3.png`)} alt="Resume"/>
      <img src={require(`../images/Resume4.png`)} alt="Resume"/>
      <img src={require(`../images/Resume5.png`)} alt="Resume"/>
      <img src={require(`../images/Resume6.png`)} alt="Resume"/>
      
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