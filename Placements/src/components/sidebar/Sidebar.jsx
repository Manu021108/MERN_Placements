import "./Sidebar.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/login/login";
function SideBar(){
    const navigate = useNavigate();
    function Logout(){

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
        navigate("/Login")
    }
    return(
        <div className="sidebar">
        <ul>
            <li>
                <NavLink to="/dashboard"
                 
                    className={({ isActive }) =>

                        isActive ? "active" : ""

                    }
                
                >
                     Dashboard
                </NavLink>
            </li>
            <li>

             <NavLink to="/register">

            Register Student

            </NavLink>
            </li>
            <li>Companies</li>
            <li>Placements</li>
            <li>Reports</li>
            <li>Settings</li>
            <button onClick={Logout}>Logout</button>
        </ul>
        </div>
    )
}
export default SideBar;