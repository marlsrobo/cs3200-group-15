import ClubEditorInline from "./club-editor-inline";
import clubService from "./club-service"

const CLUB_URL = "http://localhost:8080/api/clubs"
const { useState, useEffect } = React;

const ClubList = () => {
    const [clubs, setClubs] = useState([])
    const [newClub, setNewClub] = useState({})
    useEffect(() => {
        findAllClubs()
    }, [])
    const createClub = (club) =>
        clubService.createClub(club)
            .then(club => {
                setNewClub({title:''})
                setClubs(clubs => ([...clubs, club]))
            })
    const updateClub = (clubId, newClub) =>
        clubService.updateClub(clubId, newClub)
            .then(club => setClubs(clubs => (clubs.map(club => club.clubId === clubId ? newClub : club))))
    const findAllClubs = () =>
        clubService.findAllClubs()
            .then(clubs => setClubs(clubs))
    const deleteClub = (clubId) =>
        clubService.deleteClub(clubId)
            .then(clubs => setClubs(clubs => clubs.filter(club => club.clubId !== clubId)))
    return(
        <div>
            <h2>Clubs</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Club Title"
                                   title="Please enter a title for the club" className="form-control" value={newClub.title}
                                   onChange={(e) => setNewClub(newClub => ({...newClub, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createClub(newClub)}></i>
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

export default ClubList;