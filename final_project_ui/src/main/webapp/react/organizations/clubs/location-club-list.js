import ClubEditorInline from "./club-editor-inline";
import clubService, {createClubForLocation} from "./club-service"

const CLUB_URL = "http://localhost:8080/api/clubs"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const LocationClubList = () => {
    const [clubs, setClubs] = useState([])
    const [newClub, setNewClub] = useState({})
    const {locationId} = useParams()
    useEffect(() => {
        findClubsForLocation(locationId)
    }, [])
    const createClubForLocation = (club) =>
        clubService.createClubForLocation(locationId, club)
            .then(club => {
                setNewClub({name:''})
                setClubs(clubs => ([...clubs, club]))
            })
    const updateClub = (clubId, newClub) =>
        clubService.updateClub(clubId, newClub)
            .then(club => setClubs(clubs => (clubs.map(club => club.clubId === clubId ? newClub : club))))
    const findClubsForLocation = (locationId) =>
        clubService.findClubsForLocation(locationId)
            .then(clubs => setClubs(clubs))
    const deleteClub = (clubId) =>
        clubService.deleteClub(clubId)
            .then(clubs => setClubs(clubs => clubs.filter(club => club.clubId !== clubId)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Clubs
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Name"
                                   className="form-control"
                                   value={newClub.name}
                                   onChange={(e) => setNewClub(newClub => ({...newClub, name: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <select
                              className="form-control"
                              value={newClub.category}
                              onChange={(e)=>setNewClub(newClub => ({...newClub, category: e.target.value}))}>
                              <option>ACADEMIC</option>
                              <option>ART</option>
                              <option>BUSINESS</option>
                              <option>CULTURAL</option>
                              <option>SOCIAL</option>
                              <option>SPORTS</option>
                           </select>
                        </div>
                        <div className="col">
                          <input placeholder="Advisor"
                              className="form-control"
                              value={newClub.advisor}
                              onChange={(e) => setNewClub(newClub => ({...newClub, advisor: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <input placeholder="Budget"
                                   type="number"
                                   className="form-control"
                                   value={newClub.budget}
                                   onChange={(e) => setNewClub(newClub => ({...newClub, budget: e.target.value}))}/>
                        </div>
                        <div className="col">
                           <input placeholder="Capacity"
                                   type="number"
                                   className="form-control"
                                   value={newClub.capacity}
                                   onChange={(e) => setNewClub(newClub => ({...newClub, capacity: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createClubForLocation(newClub)}></i>
                        </div>
                    </div>
                </li>
            {
                clubs.map(club =>
                    <li key={club.clubId} className="list-group-item">
                        <ClubEditorInline key={club._clubId}
                                             updateClub={updateClub}
                                             deleteClub={deleteClub}
                                             club={club}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default LocationClubList;