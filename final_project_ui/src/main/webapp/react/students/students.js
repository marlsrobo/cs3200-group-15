import Student from "./student";

const { useState, useEffect } = React;

const Students = () => {
    const [students, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState({})
    const createStudent = (student) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/students`, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(student => setStudents(students => ([...students, student])))
    const updateStudent = (id, newStudent) =>
        fetch(`http://localhost:8080/orm/update/student/${id}/${newStudent.password}`)
            .then(response => response.json())
            .then(student => setStudents(students => (students.map(student => student._id === id ? newStudent : student))))
    const findAllStudents = () =>
        fetch(`http://localhost:8080/orm/find/students`)
            .then(response => response.json())
            .then(students => setStudents(students))
    const deleteStudent = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/students/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(students => setStudents(students => students.filter(student => student._id !== id)))
    useEffect(() => {
        findAllStudents()
    }, [])
    return(
        <div>
            <h2>Students {students.length}</h2>
            <input value={newStudent.title}
                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, title: e.target.value}))}/>
            <input value={newStudent.owner}
                   onChange={(e) => setNewStudent(newStudent => ({...newStudent, owner: e.target.value}))}/>
            <button onClick={() => createStudent(newStudent)}>Create</button>
            {
                students.map(student =>
                    <Student key={student._id}
                        updateStudent={updateStudent}
                        deleteStudent={deleteStudent}
                        student={student}/>)
            }
        </div>
    )
}

export default Students;


