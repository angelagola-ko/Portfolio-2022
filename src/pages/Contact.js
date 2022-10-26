import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
//  require('dotenv').config();

const styling = {
  width: "400px",
  color: "purple",
  margin:"auto",

}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);


  const submit = () => {
    if (name && email && message) {
        const serviceId = 'service_6j6kpw9';
        const templateId = 'template_arxzovq';
        const userId = 'DXIANG8HTMzfP5ftc';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}

  return (
  <div style={styling}>
      <div className="section">
          <div className="container text-center">
            <div className="row">  
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <Button onClick={submit} variant="dark">Send Message</Button>
                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;




// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 }
// };

// const Contact = ({ num }) => {

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
//       <h1 color="primary">Contact</h1>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" placeholder="Enter your name" />
//         </label>
//         <label>
//           Email:
//           <input type="email" email="email" placeholder="Enter your email" />
//         </label>
//         <label>
//           Message:
//           <input type="text" message="message" placeholder="Enter text here." />
//         </label>
//        <button>Submit</button>

//       </form>
      
      
//     </motion.div>
//   );
// };

// export default function App() {
//   return (
//     <div className="App">
//       <Contact />
  
//     </div>
//   );
// }