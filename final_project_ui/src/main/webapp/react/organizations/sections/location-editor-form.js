import locationService from "./location-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const LocationEditorForm = () => {
    const [location, setLocation] = useState({})
    const {locationId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findLocationById(locationId)
    }, []);
    const findLocationById = (id) =>
        locationService.findLocationById(id)
            .then(location => setLocation(location))
    const updateLocation = (id, newLocation) =>
        locationService.updateLocation(id, newLocation)
            .then(() => history.goBack())
    const deleteLocation = (id) =>
        locationService.deleteLocation(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Location Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={location.locationId}/>
            <label>Campus</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setLocation(location => ({...location, campus: e.target.value}))}
                value={location.campus}/>
            <label>Building</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setLocation(location => ({...location, building: e.target.value}))}
                value={location.building}/>
            <label>Room Number</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={location.roomNumber}
                onChange={(e)=>setLocation(location => ({...location, roomNumber: parseInt(e.target.value)}))}/>
            <label>Semester</label>
            <select
                className="form-control margin-bottom-10px"
                value={location.semester}
                onChange={(e)=>setLocation(location => ({...location, semester: e.target.value}))}>
                <option>FALL</option>
                <option>SPRING</option>
                <option>SUMMER</option>
            </select>
            <label className="margin-bottom-10px">
            <input
                type="checkbox"
                checked={location.inPerson}
                onChange={(e)=>setLocation(location => ({...location, inPerson: e.target.checked}))}/>
                &nbsp;In-Person
            </label>
            <br/>
            <button
                onClick={() => updateLocation(location.locationId, location)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteLocation(location.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default LocationEditorForm