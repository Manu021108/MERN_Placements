
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar"
import SideBar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Login from './pages/login/login';
import Dashboard from './components/Dashboard/Dashboard';
//all the components will be wrapped here 
//layout structure will be defined here
//routing 
import {useState,useEffect} from "react";
import Register from './pages/Registration/Registration';
import Layout from './components/Layout/Layout';
import Students from './pages/students/Students'
import StudentDetails from './pages/StudentDetails/StudenDetails';
import NotFound from './pages/NotFound/NotFound';
import EditStudent from './pages/EditStudent/EditStudent';
import AuthRegister from './pages/Authentication/Register'
import ProtectedRoute from './components/ProtectedRoute';

function App(){
  const [count,setCount] = useState(0);
  const [name,setName]=useState("Rahul");
  const [students, setStudents] = useState(() => {
  const savedStudents = localStorage.getItem("students");
  return savedStudents ? JSON.parse(savedStudents) : [];
});
  useEffect(() => {
  localStorage.setItem("students", JSON.stringify(students));
}, [students]);

return(
    <Routes>
      <Route
      path='/login'
      element={<Login/>}
      />
      <Route

          path="/auth/register"

          element={<AuthRegister/>}

/>
      <Route
      path=''
      element={<Home/>}
      />
      
       <Route element={<Layout />}>

        <Route path="/dashboard" element={<ProtectedRoute>

          <Dashboard/>

          </ProtectedRoute>} />
        <Route path="/students" element={
          <ProtectedRoute>
          <Students students={students} setStudents={setStudents}/>
          </ProtectedRoute>} />
        <Route

          path="/students/:id"

          element={
            <ProtectedRoute>
          <StudentDetails/>
          </ProtectedRoute>
          }

          />
          <Route
  path="/students/edit/:id"
  element={<EditStudent  />}
/>

      </Route>
      <Route

          path="*"

          element={<NotFound/>}

      />
      


    </Routes> 
    
    
  )
}
export default App;
