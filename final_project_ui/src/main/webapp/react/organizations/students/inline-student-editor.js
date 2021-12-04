const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const StudentEditorInline = ({student, deleteStudent, updateStudent}) => {
    const [studentCopy, setStudentCopy] = useState(student)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={studentCopy.firstName}
                            onChange={(e)=>setStudentCopy(studentCopy => ({...studentCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                       <input
                            className="form-control"
                            value={studentCopy.lastName}
                            onChange={(e)=>setStudentCopy(studentCopy => ({...studentCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                       <input
                            className="form-control"
                            value={studentCopy.username}
                            onChange={(e)=>setStudentCopy(studentCopy => ({...studentCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-3">
                        <Link to={`/api/students/${studentCopy.studentId}/clubs`}>
                            Clubs
                        </Link>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateStudent(studentCopy.studentId, studentCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteStudent(student.studentId)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/students/${studentCopy.studentId}`}>
                            {studentCopy.firstName}
                        </Link>
                    </div>
                    <div className="col-1">
                                            <Link to={`/students/${studentCopy.studentId}`}>
                                                {studentCopy.lastName}
                                            </Link>
                                        </div>
                    <div className="col-2">
                                            <Link to={`/students/${studentCopy.studentId}`}>
                                                {studentCopy.username}
                                            </Link>
                                        </div>
                    <div className="col-3">
                        <Link to={`/students/${studentCopy.studentId}/clubs`}>
                            Clubs
                        </Link>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default StudentEditorInline;