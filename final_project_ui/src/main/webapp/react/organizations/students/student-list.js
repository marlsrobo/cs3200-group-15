import StudentEditorInline from "./inline-student-editor";
import studentService from "./student-service"

const CLUB_URL = "http://localhost:8080/api/students"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;


const StudentList = () => {
    const history = useHistory()
    const [students, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState({})
    useEffect(() => {
        findAllStudents()
    }, [])
    const createStudent = (student) =>
        studentService.createStudent(student)
            .then(student => {
                setNewStudent({name:''})
                setStudents(students => ([...students, student]))
            })
    const updateStudent = (studentId, newStudent) =>
        studentService.updateStudent(studentId, newStudent)
            .then(student => setStudents(students => (students.map(student => student.studentId === studentId ? newStudent : student))))
    const findAllStudents = () =>
        studentService.findAllStudents()
            .then(students => setStudents(students))
    const deleteStudent = (studentId) =>
        studentService.deleteStudent(studentId)
            .then(students => setStudents(students => students.filter(student => student.studentId !== studentId)))
    return(
        <div>
            <h2>Students</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <button onClick={() => history.push("/students/new")}>
                                        Add Student
                                    </button>
                    </div>
                </li>
            {
                students.map(student =>
                    <li key={student.studentId} className="list-group-item">
                        <StudentEditorInline key={student._studentId}
                            updateStudent={updateStudent}
                            deleteStudent={deleteStudent}
                            student={student}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default StudentList;