import "./Dashboard.css";
import { useState } from "react";
import {useEffect} from "react";
import Clock from "../Clock/Clock";

function Dashboard(){
    const [TotalStudents,setTotalStudents] = useState(251);
    useEffect(()=>{

        alert("Welcome Admin");

        },[]);
    function addStudent(){
        setTotalStudents(TotalStudents+1)
    }
    

            useEffect(() => {

    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {

        console.log("Admin already logged in");

    } else {

        console.log("Please login");

    }

}, []);
    

return(
    

<div className="dashboard">


<h1>

Welcome Back 👋

</h1>
<Clock/>

<div className="cards">

<div className="card">

<h2>{TotalStudents}</h2>

<p>Total Students</p>
<button onClick={addStudent} >add student</button>

</div>

<div className="card">

<h2>35</h2>

<p>Companies</p>

</div>

<div className="card">

<h2>180</h2>

<p>Placed</p>

</div>

<div className="card">

<h2>70</h2>

<p>Pending</p>


</div>

</div>

</div>

);

}

export default Dashboard;