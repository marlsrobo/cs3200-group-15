import studentService from "./student-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const StudentFormEditor = () => {
    const {id} = useParams()
    const [student, setStudent] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findStudentById(id)
        }
    }, []);
    const createStudent = (student) => studentService.createStudent(student).then(() => history.back())
    const findStudentById = (id) => studentService.findStudentById(id).then(student => setStudent(student))
    const deleteStudent = (id) => studentService.deleteStudent(id).then(() => history.back())
    const updateStudent = (id, newStudent) => studentService.updateStudent(id, newStudent).then(() => history.back())
    return (
        <div>
            <h2>Student Editor</h2>
            <label>ID</label>
            <input value={student.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) => setStudent(student => ({...student, firstName: e.target.value}))}
                value={student.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) => setStudent(student => ({...student, lastName: e.target.value}))}
                value={student.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) => setStudent(student => ({...student, username: e.target.value}))}
                value={student.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) => setStudent(student => ({...student, password: e.target.value}))}
                value={student.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) => setStudent(student => ({...student, email: e.target.value}))}
                value={student.email}/><br/>
            <label>Date of Birth</label>
            <input
                onChange={(e) => setStudent(student => ({...student, dob: e.target.value}))}
                value={student.dob}/><br/>
            <button
                onClick={() => {history.back()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteStudent(student.id)}>
                Delete
            </button>
            <button
                onClick={() => createStudent(student)}>
                Create
            </button>
            <button
                onClick={() => updateStudent(student.id, student)}>
                Save
            </button>
        </div>
    )
}

export default StudentFormEditor