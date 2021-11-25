const { useState, useEffect } = React;

const Student = ({student, deleteStudent, updateStudent}) => {
    const [studentCopy, setStudentCopy] = useState(student)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={studentCopy.firstName} onChange={(e)=>setStudentCopy(studentCopy => ({...studentCopy, firstName: e.target.value}))}/>
                        <input value={studentCopy.lastName} onChange={(e)=>setStudentCopy(studentCopy => ({...studentCopy, lastName: e.target.value}))}/>
                        <button onClick={() => deleteStudent(student._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateStudent(studentCopy._id, studentCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {studentCopy.firstName}
                        {studentCopy.lastName}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Student;