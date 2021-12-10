import clubService from "./club-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const CLUB_URL = "http://localhost:8080/api/clubs"

const ClubEditorForm = () => {
    const [club, setClubs] = useState([])
    const [newClub, setNewClub] = useState({})
    const {clubId} = useParams()
    console.log(clubId);
    const history = useHistory()
    useEffect(() => {
        findClubById(clubId)
    }, []);
    const findClubById = (clubId) =>
        clubService.findClubById(clubId)
            .then(club => setClubs(club))
    const updateClub = (clubId, newClub) =>
        clubService.updateClub(clubId, newClub)
            .then(() => history.goBack())
    const createClub = (club) => clubService.createClub(club).then(() => history.goBack())

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
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setClubs(club => ({...club, name: e.target.value}))}
                value={club.name}/>
             <label>Category</label>
             <select
                className="form-control margin-bottom-10px"
                value={club.category}
                onChange={(e)=>setClubs(club => ({...club, category: e.target.value}))}>
                <option>ACADEMIC</option>
                <option>ART</option>
                <option>BUSINESS</option>
                <option>CULTURAL</option>
                <option>SOCIAL</option>
                <option>SPORTS</option>
            </select>
            <label>Advisor</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setClubs(club => ({...club, advisor: e.target.value}))}
                value={club.advisor}/>
            <label>Budget</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={club.budget}
                onChange={(e) => setClubs(club => ({...club, budget: parseInt(e.target.value)}))}/>
            <label>Capacity</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={club.capacity}
                onChange={(e) => setClubs(club => ({...club, capacity: parseInt(e.target.value)}))}/>
            <button
                onClick={() => createClub(club)}
                className="btn btn-success btn-block">Create</button>
            <button
                onClick={() => updateClub(club.clubId, club)}
                className="btn btn-success btn-block margin-left-10px">Save</button>
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