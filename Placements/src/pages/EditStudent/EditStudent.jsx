import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";

function EditStudent() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch student when page loads
    useEffect(() => {

        fetchStudent();

    }, []);

    async function fetchStudent() {

        try {

            const response = await api.get(`/students/${id}`);

            const student = response.data.student;

            setStudentName(student.studentName);
            setEmail(student.email);
            setPhone(student.phone);
            setBranch(student.branch);
            setCgpa(student.cgpa);

        }

        catch (error) {

            console.log(error);

        }
        
    }

    async function updateStudent(e) {

        e.preventDefault();

        const updatedStudent = {

            studentName,
            email,
            phone,
            branch,
            cgpa

        };

        try {

            setLoading(true);
            await api.put(`/students/${id}`, updatedStudent);

            alert("Student Updated Successfully");

            navigate("/students");

        }

        catch (error) {

            const message =
        error.response?.data?.message ||
        "Something went wrong.";

    alert(message);

        }
        finally{
            setLoading(false);
        }


    }

    return (

        <div>

            <h1>Edit Student</h1>

            <form onSubmit={updateStudent}>

                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Student Name"
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                />

                <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="Branch"
                />

                <input
                    type="number"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    placeholder="CGPA"
                />

                <button disabled={loading}>
                    {loading ? "Updating..." : "Update Student"}
                </button>

            </form>

        </div>

    );

}

export default EditStudent;