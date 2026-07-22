import "./StudentTable.css";
import { Link } from "react-router-dom";


function StudentTable({ students,deleteStudent }) {
    console.log(students)

    return (

        <div>

            {
                students.length === 0 ?

                    <h3>No Students Registered</h3>

                    :

                    <table border="1">

                        <thead>

                            <tr>

                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Branch</th>
                                <th>CGPA</th>
                                <th>Profile Image</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                students.map((student) => (

                                    <tr key={student._id}>

                                        <td>{student._id}</td>
                                        <td>{student.studentName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.branch}</td>
                                        <td>{student.cgpa}</td>
                                        <td>
                                            {student.image ? (
                                                <img
                                                    src={`http://localhost:5000/uploads/${student.image}`}
                                                    width="80"
                                                    height="80"
                                                    alt={student.studentName}
                                                />
                                                ) : (
                                                "No Image"
                                                )}
                                        </td>
                                        <td>
                                        <Link to={`/students/${student._id}`}>

                                        View

                                        </Link>
                                        <button

                                            onClick={()=>deleteStudent(student._id)}

                                            >

                                            Delete

                                            </button>
                                                <Link to={`/students/edit/${student._id}`}>
                                                    Edit
                                                </Link>
                                            
                                            </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

            }

        </div>

    );

}

export default StudentTable;