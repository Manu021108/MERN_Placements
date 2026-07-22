import "./Navbar.css";
import { FaUserGraduate } from "react-icons/fa";
function Navbar({name,year}){
    
    return(
      <nav className="navbar">
        <FaUserGraduate />
        <h2
           >Placement Management System {year}</h2>
        <p>welcome back {name}</p>
        
      </nav>
    )

};
export default Navbar