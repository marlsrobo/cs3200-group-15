const CLUB_URL = "http://localhost:8080/api/clubs"
const LOCATION_URL = "http://localhost:8080/api/locations"

export const createLocation = (location) =>
    fetch(LOCATION_URL, {
        method: 'POST',
        body: JSON.stringify(location),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createLocationForClub = (clubId, location) =>
    fetch(`${CLUB_URL}/${clubId}/locations`, {
        method: 'POST',
        body: JSON.stringify(location),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllLocations = () => fetch(LOCATION_URL).then(response => response.json())

export const findLocationForClub = (clubId) =>
    fetch(`${CLUB_URL}/${clubId}/location`)
        .then(response => response.json())

export const findLocationById = (id) =>
    fetch(`${LOCATION_URL}/${id}`)
        .then(response => response.json())

export const updateLocation = (id, location) =>
    fetch(`${LOCATION_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(location),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteLocation = (id) =>
    fetch(`${LOCATION_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createLocation,
    createLocationForClub,
    findLocationForClub,
    findAllLocations,
    findLocationById,
    updateLocation,
    deleteLocation
}