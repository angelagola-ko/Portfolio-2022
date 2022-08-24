
export default function Resume() {
    return (
 <div>
     
{/* <embed src="https://docs.google.com/document/d/14y_j0p56Y93V5P5laXkNJiEpYEu7vZuCYMDfXyKxeLo/edit?usp=sharing"></embed> */}
    
<iframe src={require("./Resume.pdf")} style={{width:"100%", height:"900px"}}></iframe>
 </div>    
    );
  }