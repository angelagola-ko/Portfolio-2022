import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Project.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src="https://img.icons8.com/nolan/64/github.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/nolan/64/domain.png" alt="Live Application" /></a> 
       
             
             </p>
              <p class="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;

// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 }

// };

// // const projects = [
// //   {
// //     name:'Project 1',
// //     img: 'https://picsum.photo/200/200',
// //     p: 'Project 1 is for testing...'
// //   },
// //   {
// //     name:'Project 2',
// //     img: 'https://picsum.photo/200/200',
// //     p: 'Project 1 is for testing...'
// //   },
// //   {
// //     name:'Project 3',
// //     img: 'https://picsum.photo/200/200',
// //     p: 'Project 1 is for testing...'
// //   },
// //   {
// //     name:'Project 4',
// //     img: 'https://picsum.photo/200/200',
// //     p: 'Project 1 is for testing...'
// //   },
// //   {
// //     name:'Project 6',
// //     img: 'https://picsum.photo/200/200',
// //     p: 'Project 1 is for testing...'
// //   }
// // ];

// // const showProjects = () => {
// //   let output = '';

// //   // projects.forEach(proj => {
// //   //   output += `
// //   //     <div 
// //   //       <img src="${proj.img}" />
// //   //       <h2> ${proj.name} </h2>
// //   //       <p> ${proj.p} </p>
// //   //     </div>
// //   //   `;

// //   // });
// //   return output;

// // }

// const Projects = ({ num }) => {

//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       className="box"
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//     >
//     {/* { showProjects() } */}
//     </motion.div>
//   );
// };

// export default function App() {
//   return (
//       <section id="work" className="profile">
//         <div>
//             <h1 className="section-title">Work</h1>
//         </div>
//         <div className="project-examples">
//             <article className="large-project">
//                 <a href="https://whispering-castle-95599.herokuapp.com/">
//                     <div className="text-block">
//                         <h3><span>Zookeeper</span></h3>
//                         <p><span></span></p>
//                     </div>
//                 </a>
//             </article>

//             <article className="small-project noidea">
//                 <a href="https://aqueous-lake-77841.herokuapp.com/dashboard">
//                     <div className="text-block">
//                         <h3><span>Just Tech News</span></h3>
//                         <p><span></span></p>
//                     </div>
//                 </a>
//             </article>

//             <article className="small-project lobsters">
//                 <a href="https://angelagola-ko.github.io/vocabBuilder/">
//                     <div class="text-block">
//                         <h3><span>Vocab Builder</span></h3>
//                         <p><span>API, Node</span></p>
//                     </div>
//                 </a>
//             </article>

//             <article className="small-project cats">
//                 <a href="https://travelot-app.herokuapp.com/">
//                     <div className="text-block">
//                         <h3><span>Travelot</span></h3>
//                         <p><span>mySQL, Handlebars, Sequelize, JQuery</span></p>
//                     </div>
//                 </a>
//             </article>
//             <article className="small-project run-buddy">
//                 <a href="https://angelagola-ko.github.io/runbud/" alt="Link to Run Buddy Repo">
//                     <div className="text-block">
//                         <h3><span>Run Buddy</span></h3>
//                         <p><span>HTML/CSS</span></p>
//                     </div>
//                 </a>
//             </article>
//         </div>
//     </section>
//   );
// }

