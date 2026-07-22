import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import api from "../../api/api";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    async function handleLogin(){

    try{

        const user={

            email,

            password

        };

        const response=await api.post(

            "/auth/login",

            user

        );

        localStorage.setItem(

            "token",

            response.data.token

            );

        setMessage(response.data.message);

        navigate("/dashboard");

    }

    catch(error){

        setMessage(

            error.response?.data?.message ||

            "Login Failed"

        );

    }

}

    return (

        <div>

            <input

            type="email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            placeholder="Enter Email"

           />
           <input

            type={showPassword ? "text" : "password"}

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            placeholder="Enter Password"

          />
            <button

                type="button"

                onClick={()=>setShowPassword(!showPassword)}

                >

                {showPassword?"Hide Password":"Show Password"}

            </button>
            <button onClick={handleLogin}>

                Login

            </button>
            <h3>{message}</h3>
        </div>



    );
}

export default Login;