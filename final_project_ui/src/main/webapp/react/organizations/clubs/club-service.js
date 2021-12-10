const CLUB_URL = "http://localhost:8080/api/clubs"
const STUDENT_URL = "http://localhost:8080/api/students"
const LOCATION_URL = "http://localhost:8080/api/locations"


export const createClubForStudent = (studentId, club) =>
    fetch(`${STUDENT_URL}/${studentId}/clubs`, {
        method: 'POST',
        body: JSON.stringify(club),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createClubForLocation = (locationId, club) =>
    fetch(`${LOCATION_URL}/${locationId}/clubs`, {
        method: 'POST',
        body: JSON.stringify(club),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createClub = (club) =>
    fetch(CLUB_URL, {
        method: 'POST',
        body: JSON.stringify(club),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllClubs = () =>
    fetch(CLUB_URL)
        .then(response => response.json())

export const findClubById = (clubId) =>
    fetch(`${CLUB_URL}/${clubId}`)
        .then(response => response.json())

export const findClubsForLocation = (locationId) =>
    fetch(`${LOCATION_URL}/${locationId}/clubs`)
        .then(response => response.json())

export const findClubsForStudent = (studentId) =>
    fetch(`${STUDENT_URL}/${studentId}/clubs`)
        .then(response => response.json())

export const updateClub = (clubId, club) =>
    fetch(`${CLUB_URL}/${clubId}`, {
        method: 'PUT',
        body: JSON.stringify(club),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteClub = (clubId) =>
    fetch(`${CLUB_URL}/${clubId}`, {
        method: "DELETE"
    })

export default {
    createClubForStudent,
    createClubForLocation,
    createClub,
    findAllClubs,
    findClubById,
    findClubsForLocation,
    findClubsForStudent,
    updateClub,
    deleteClub
}