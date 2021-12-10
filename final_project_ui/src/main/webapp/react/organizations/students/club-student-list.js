import StudentEditorInline from "./inline-student-editor";
import studentService, {createStudentForClub} from "./student-service"

const STUDENT_URL = "http://localhost:8080/api/students"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ClubStudentList = () => {
    const [students, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState({})
    const {clubId} = useParams()
    useEffect(() => {
        findStudentsForClub(clubId)
    }, [])
    const createStudentForClub = (student) =>
        studentService.createStudentForClub(clubId, student)
            .then(student => {
                setNewStudent({name:''})
                setStudents(students => ([...students, student]))
            })
    const updateStudent = (studentId, newStudent) =>
        studentService.updateStudent(studentId, newStudent)
            .then(student => setStudents(students => (students.map(student => student.studentId === studentId ? newStudent : student))))
    const findStudentsForClub = (clubId) =>
        studentService.findStudentsForClub(clubId)
            .then(students => setStudents(students))
    const deleteStudent = (studentId) =>
        studentService.deleteStudent(studentId)
            .then(students => setStudents(students => students.filter(student => student.studentId !== studentId)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Students
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="First Name"
                                   className="form-control"
                                   value={newStudent.firstName}
                                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, firstName: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <input placeholder="Last Name"
                                   className="form-control"
                                   value={newStudent.lastName}
                                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, lastName: e.target.value}))}/>
                        </div>
                        <div className="col">
                          <input placeholder="Username"
                              className="form-control"
                              value={newStudent.username}
                              onChange={(e) => setNewStudent(newStudent => ({...newStudent, username: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <input placeholder="Password"
                                   className="form-control"
                                   value={newStudent.password}
                                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, password: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <input placeholder="Email"
                                   className="form-control"
                                   value={newStudent.email}
                                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, email: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input placeholder="Date of Birth"
                                    type="date"
                                    className="form-control"
                                    value={newStudent.dateOfBirth}
                                    onChange={(e) => setNewStudent(newStudent => ({...newStudent, dateOfBirth: e.target.value}))}/>
                         </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createStudentForClub(newStudent)}></i>
                        </div>
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

export default ClubStudentList;