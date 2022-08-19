import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Project.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }

};

const projects = [
  {
    name:'Project 1',
    img: 'https://picsum.photo/200/200',
    p: 'Project 1 is for testing...'
  },
  {
    name:'Project 2',
    img: 'https://picsum.photo/200/200',
    p: 'Project 1 is for testing...'
  },
  {
    name:'Project 3',
    img: 'https://picsum.photo/200/200',
    p: 'Project 1 is for testing...'
  },
  {
    name:'Project 4',
    img: 'https://picsum.photo/200/200',
    p: 'Project 1 is for testing...'
  },
  {
    name:'Project 6',
    img: 'https://picsum.photo/200/200',
    p: 'Project 1 is for testing...'
  }
];

const showProjects = () => {
  let output = '';

  projects.forEach(proj => {
    output += `
      <div 
        <img src="${proj.img}" />
        <h2> ${proj.name} </h2>
        <p> ${proj.p} </p>
      </div>
    `;

  });
  return output;

}

const Projects = ({ num }) => {

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
    { showProjects() }
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Projects />
  
    </div>
  );
}