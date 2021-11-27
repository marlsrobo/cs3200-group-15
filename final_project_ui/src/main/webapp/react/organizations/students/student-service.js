// TODO: declare URL where server listens for HTTP requests
const STUDENTS_URL = "http://localhost:8080/api/students"

// TODO: retrieve all students from the server
export const findAllStudents = () => fetch(STUDENTS_URL).then(response => response.json())

// TODO: retrieve a single student by their ID
export const findStudentById = (studentId) => fetch(`${STUDENTS_URL}/${studentId}`).then(response => response.json())

// TODO: delete a student by their ID
export const deleteStudent = (studentId) => fetch(`${STUDENTS_URL}/${studentId}`, {method: "DELETE"})

// TODO: create a new student
export const createStudent = (student) =>
    fetch(STUDENTS_URL, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

// TODO: update a student by their ID
export const updateStudent = (studentId, student) =>
    fetch(`${STUDENTS_URL}/${studentId}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllStudents,
    findStudentById,
    deleteStudent,
    createStudent,
    updateStudent
}
