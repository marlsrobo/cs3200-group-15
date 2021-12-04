import LocationEditorInline from "./location-editor-inline";
import locationService from "./location-service"

const LOCATION_URL = "http://localhost:8080/api/locations"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;


const LocationList = () => {
    const history = useHistory()
    const [locations, setLocations] = useState([])
    const [newLocation, setNewLocation] = useState({})
    useEffect(() => {
        findAllLocations()
    }, [])
    const createLocation = (location) =>
        locationService.createLocation(location)
            .then(location => {
                setNewLocation({name:''})
                setLocations(locations => ([...locations, location]))
            })
    const updateLocation = (locationId, newLocation) =>
        locationService.updateLocation(locationId, newLocation)
            .then(location => setLocations(locations => (locations.map(location => location.locationId === locationId ? newLocation : location))))
    const findAllLocations = () =>
        locationService.findAllLocations()
            .then(locations => setLocations(locations))
    const deleteLocation = (locationId) =>
        locationService.deleteLocation(locationId)
            .then(locations => setLocations(locations => locations.filter(location => location.locationId !== locationId)))
    return(
        <div>
            <h2>Locations</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <button onClick={() => history.push("/locations/new")}>
                                        Add Location
                                    </button>
                    </div>
                </li>
            {
                locations.map(location =>
                    <li key={location.locationId} className="list-group-item">
                        <LocationEditorInline key={location._locationId}
                            updateLocation={updateLocation}
                            deleteLocation={deleteLocation}
                            location={location}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default LocationList;