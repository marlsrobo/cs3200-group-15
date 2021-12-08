const CLUB_URL = "http://localhost:8080/api/clubs"
const STUDENTS_URL = "http://localhost:8080/api/students"

export const createStudentForClub = (clubId, student) =>
    fetch(`${CLUB_URL}/${clubId}/students`, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
    
export const findStudentsForClub = (clubId) =>
    fetch(`${CLUB_URL}/${clubId}/students`)
        .then(response => response.json())

export const findAllStudents = () => fetch(STUDENTS_URL).then(response => response.json())

export const findStudentById = (studentId) => fetch(`${STUDENTS_URL}/${studentId}`).then(response => response.json())

export const findStudentMembershipStatusForClub = (clubId, studentId) => fetch(`${CLUB_URL}/students/${studentId}`).then(response => response.json())

export const deleteStudent = (studentId) => fetch(`${STUDENTS_URL}/${studentId}`, {method: "DELETE"})

export const createStudent = (student) =>
    fetch(STUDENTS_URL, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const updateStudent = (studentId, student) =>
    fetch(`${STUDENTS_URL}/${studentId}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export default {
    createStudentForClub,
    findStudentsForClub,
    findStudentMembershipStatusForClub,
    findAllStudents,
    findStudentById,
    deleteStudent,
    createStudent,
    updateStudent
}
