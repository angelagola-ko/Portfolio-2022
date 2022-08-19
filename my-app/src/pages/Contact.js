import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Contact = ({ num }) => {

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
      <h1 color="primary">Contact</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input type="email" email="email" placeholder="Enter your email" />
        </label>
        <label>
          Message:
          <input type="text" message="message" placeholder="Enter text here." />
        </label>
       <button>Submit</button>

      </form>
      
      
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Contact />
  
    </div>
  );
}