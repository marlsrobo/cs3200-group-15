const CLUB_URL = "http://localhost:8080/api/clubs"

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
    createClub,
    findAllClubs,
    findClubById,
    updateClub,
    deleteClub
}