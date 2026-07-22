import { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

function Register() {

    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [loading, setLoading] = useState(false);
    const [image,setImage]=useState(null);
    
    const navigate = useNavigate();

    async function registerStudent(e) {

        e.preventDefault();
         try{
            setLoading(true)

        const formData = new FormData();

                formData.append("studentName", studentName);

                formData.append("email", email);

                formData.append("phone", phone);

                formData.append("branch", branch);

                formData.append("cgpa", cgpa);

                formData.append("image", image);
                        

        const response = await api.post(

            "/students",

            formData,

    {

        headers:{

            "Content-Type":"multipart/form-data"

        }

    }

);
        // alert(response.data.message);

        setStudentName("");

        setEmail("");

        setPhone("");

        setBranch("");

        setCgpa("");

        navigate("/students");

    }
    

    catch(error){

        console.log(error);

        alert("Registration Failed");

}finally{
    setLoading(false);
}

    }

    return (

        <div className="register-container">

            <h1>Student Registration</h1>

            <form onSubmit={registerStudent}>

                <input
                    type="text"
                    placeholder="Enter Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Enter CGPA"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                />
                <input

                    type="file"

                    accept="image/*"

                    onChange={(e)=>setImage(e.target.files[0])}

                    />

                <button disabled={loading}>
                    {loading ? "Registering..." : "Register Student"}
                </button>

            </form>
       
            

        </div>

    );

}

export default Register;