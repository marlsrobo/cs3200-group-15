import studentService from "./student-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const STUDENT_URL = "http://localhost:8080/api/students"

const StudentEditorForm = () => {
    const [student, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState({})
    const {studentId} = useParams()
    console.log(studentId);
    const history = useHistory()
    useEffect(() => {
        findStudentById(studentId)
    }, []);
    const findStudentById = (studentId) =>
        studentService.findStudentById(studentId)
            .then(student => setStudents(student))
    const updateStudent = (studentId, newStudent) =>
        studentService.updateStudent(studentId, newStudent)
            .then(() => history.goBack())
    const createStudent = (student) => studentService.createStudent(student).then(() => history.goBack())

    const deleteStudent = (studentId) =>
        studentService.deleteStudent(studentId)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Student Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={student.studentId}/>
            <label>First Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setStudents(student => ({...student, firstName: e.target.value}))}
                value={student.firstName}/>
             <label>Last Name</label>
             <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setStudents(student => ({...student, lastName: e.target.value}))}
                value={student.lastName}/>
            <label>Username</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setStudents(student => ({...student, username: e.target.value}))}
                value={student.username}/>
            <label>Password</label>
            <input
                className="form-control margin-bottom-10px"
                value={student.password}
                onChange={(e) => setStudents(student => ({...student, password: e.target.value}))}/>
            <label>Email</label>
            <input
                className="form-control margin-bottom-10px"
                value={student.email}
                onChange={(e) => setStudents(student => ({...student, email: e.target.value}))}/>
            <label>Date of Birth</label>
            <input
             //   type="date"
                className="form-control margin-bottom-10px"
                value={student.dateOfBirth}
                onChange={(e) => setStudents(student => ({...student, dateOfBirth: e.target.value}))}/>
            <button
                onClick={() => createStudent(student)}
                className="btn btn-success btn-block">Create</button>
            <button
                onClick={() => updateStudent(student.studentId, student)}
                className="btn btn-success btn-block margin-left-10px">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteStudent(student.studentId)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default StudentEditorForm