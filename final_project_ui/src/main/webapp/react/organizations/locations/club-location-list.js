/*
import LocationEditorInline from "./location-editor-inline";
import locationService, {createLocationForClub} from "./location-service"

const LOCATION_URL = "http://localhost:8080/api/locations"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ClubLocationList = () => {
    const [locations, setLocations] = useState([])
    const [newLocation, setNewLocation] = useState({})
    const {clubId} = useParams()
    useEffect(() => {
        findLocationForClub(clubId)
    }, [])
    const createLocationForClub = (location) =>
        locationService.createLocationForClub(clubId, location)
            .then(location => {
                setNewLocation({name:''})
                setLocations(locations => ([...locations, location]))
            })
    const updateLocation = (id, newLocation) =>
        locationService.updateLocation(id, newLocation)
            .then(location => setLocations(locations => (locations.map(location => location.id === id ? newLocation : location))))
    const findLocationForClub = (clubId) =>
        locationService.findLocationForClub(clubId)
            .then(locations => setLocations(locations))
    const deleteLocation = (id) =>
        locationService.deleteLocation(id)
            .then(locations => setLocations(locations => locations.filter(location => location.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Locations
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Location Campus"
                                   title="Please enter a campus for the location"
                                   className="form-control"
                                   value={newLocation.campus}
                                   onChange={(e) => setNewLocation(newLocation => ({...newLocation, campus: e.target.value}))}/>
                        </div>
                        <div className="col">
                                                    <input placeholder="Location Building"
                                                           title="Please enter a building for the location"
                                                           className="form-control"
                                                           value={newLocation.building}
                                                           onChange={(e) => setNewLocation(newLocation => ({...newLocation, building: e.target.value}))}/>
                                                </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createLocationForClub(newLocation)}></i>
                        </div>
                    </div>
                </li>
            {
                locations.map(location =>
                    <li key={location.id} className="list-group-item">
                        <LocationEditorInline key={location._id}
                                             updateLocation={updateLocation}
                                             deleteLocation={deleteLocation}
                                             location={location}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default ClubLocationList;*/
