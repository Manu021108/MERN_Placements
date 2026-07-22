import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentTable from "../../components/StudentTable/StudentTable";
import api from "../../api/api";

function Students() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [loading,setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 10;
    const [totalPages, setTotalPages] = useState(1);
    const [sortField, setSortField] = useState("studentName");
    const [order, setOrder] = useState("asc");
    const [branch, setBranch] = useState("");
    const token = localStorage.getItem("token");

    async function deleteStudent(id){

    try{

        await api.delete(`/students/${id}`);

        fetchStudents();

    }

    catch(error){

        console.log(error);

    }

}
    
    async function fetchStudents(pageNumber) {

    try{

        setLoading(true);

        const response = await api.get(

                `/students?page=${pageNumber}&limit=${limit}&sort=${sortField}&order=${order}&branch=${branch}&search=${search}`,
                {

                        headers:{

                        Authorization:`Bearer ${token}`

                        }

                        }


             );

        setStudents(response.data.students);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);

    }

    catch(error){

        console.log(error);

    }

    finally{

        setLoading(false);

    }

}
    useEffect(() => {
  fetchStudents(1);
}, [sortField, order, branch]);


    if (loading) {

        return <h2>Loading Students...</h2>;

    }
        async function searchStudents(value) {

    setSearch(value);

    try {

        const response = await api.get(

            `/students/search?q=${value}`

        );

        setStudents(response.data.students);

    }

    catch (error) {

        console.log(error);

    }

}
    return (

        <div>

            <h1>Student Management</h1>

            <p>
                Manage all registered students in the Placement Management System.
            </p>

            <Link to="/register">
                <button>Add New Student</button>
            </Link>

            <br /><br />

            <input
                type="text"
                placeholder="Search Student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br /><br />
            <button

    disabled={page === 1}

    onClick={() => fetchStudents(page - 1)}

>

Previous

</button>

<span>

Page {page} of {totalPages}

</span>

<button

    disabled={page === totalPages}

    onClick={() => fetchStudents(page + 1)}

>

Next

</button>
<select

value={sortField}

onChange={(e)=>setSortField(e.target.value)}

>

<option value="studentName">

Name

</option>

<option value="cgpa">

CGPA

</option>

<option value="branch">

Branch

</option>

</select>
<select

value={order}

onChange={(e)=>setOrder(e.target.value)}

>

<option value="asc">

Ascending

</option>

<option value="desc">

Descending

</option>

</select>
<select

value={branch}

onChange={(e)=>{

    setBranch(e.target.value);

}}


>

<option value="">

All Branches

</option>

<option value="CSE">

CSE

</option>

<option value="ECE">

ECE

</option>

<option value="AIML">AIML</option>
<option value="MECH">MECH</option>

<option value="IT">

IT

</option>

</select>

            <StudentTable students={students} 
            deleteStudent={deleteStudent}
            />

        </div>

    );

}

export default Students;