const Footer = (props) => {

    const styling = {
      marginTop: "3em",
      border: "1px solid #333",
      backgroundColor: "#ddd",
      padding: "1em",
      backgroundImage: "linear-gradient(to left, rgb(0, 0, 0) , rgb(157, 157, 157))",
    }
    
    return (
      <footer style={styling}>
        <p className="text-center">
        <a href="https://github.com/angelagola-ko" alt="Github"><img src="https://img.icons8.com/nolan/64/github.png"/></a>
        <a href="https://www.linkedin.com/in/angela-gola-46444b92/" alt="Github"><img src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
        </p>
      </footer>
    )
  }
  
  export default Footer