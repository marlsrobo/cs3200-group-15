const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const LocationEditorInline = ({location, deleteLocation, updateLocation}) => {
    const [locationCopy, setLocationCopy] = useState(location)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                <div className="col">
                                        <label>
                                        <input
                                            type="checkbox"
                                            checked={locationCopy.inPerson}
                                            onChange={(e)=>setLocationCopy(locationCopy => ({...locationCopy, inPerson: e.target.checked}))}/>
                                            &nbsp;
                                            On Campus
                                        </label>
                                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={locationCopy.campus}
                            onChange={(e)=>setLocationCopy(locationCopy => ({...locationCopy, campus: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={locationCopy.building}
                            onChange={(e)=>setLocationCopy(locationCopy => ({...locationCopy, building: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={locationCopy.roomNumber}
                            onChange={(e)=>setLocationCopy(locationCopy => ({...locationCopy, roomNumber: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                                            <Link to={`/locations/${locationCopy.locationId}/clubs`}>
                                                Clubs
                                            </Link>
                                        </div>

                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateLocation(locationCopy.locationId, locationCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteLocation(location.locationId)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                <div className="col">
                                        <Link to={`/locations/${locationCopy.locationId}`}>
                                            {locationCopy.inPerson && 'On Campus'}
                                            {!locationCopy.inPerson && 'Online'}
                                        </Link>
                                    </div>
                    <div className="col">
                        <Link to={`/locations/${locationCopy.locationId}`}>
                            {locationCopy.campus}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/locations/${locationCopy.locationId}`}>
                            {locationCopy.building}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/locations/${locationCopy.locationId}`}>
                            {locationCopy.roomNumber}
                        </Link>
                    </div>
                    <div className="col">
                                            <Link to={`/locations/${locationCopy.locationId}/clubs`}>
                                                Clubs
                                            </Link>
                                        </div>

                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default LocationEditorInline;