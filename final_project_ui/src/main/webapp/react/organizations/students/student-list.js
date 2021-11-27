import studentService from "./student-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;
const StudentList = () => {
    const history = useHistory()
    const [students, setStudents] = useState([])
    useEffect(() => {
        findAllStudents()
    }, [])
    const findAllStudents = () => studentService.findAllStudents().then(students => setStudents(students))
    return(
        <div>
            <h2>Student List</h2>
            <button onClick={() => history.push("/students/new")}>
                Add Student
            </button>
            <ul>
             {
                students.map(student =>
                     <li className="list-group-item"
                         key={student.studentId}>
                         <Link to={`/students/${student.studentId}`}>
                              {student.firstName},
                              {student.lastName},
                              {student.username}
                         </Link>
                     </li>)
             }
             </ul>
        </div>
    )
}

export default StudentList;