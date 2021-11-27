import clubService from "./club-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const CLUB_URL = "http://localhost:8080/api/clubs"

const ClubEditorForm = () => {
    const [club, setClub] = useState({})
    const {clubId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findClubById(clubId)
    }, []);
    const findClubById = (clubId) =>
        clubService.findClubById(clubId)
            .then(club => setClub(club))
    const updateClub = (clubId, newClub) =>
        clubService.updateClub(clubId, newClub)
            .then(() => history.goBack())
    const deleteClub = (clubId) =>
        clubService.deleteClub(clubId)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Club Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={club.clubId}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setClub(club => ({...club, title: e.target.value}))}
                value={club.title}/>
            <button
                onClick={() => updateClub(club.clubId, club)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteClub(club.clubId)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default ClubEditorForm