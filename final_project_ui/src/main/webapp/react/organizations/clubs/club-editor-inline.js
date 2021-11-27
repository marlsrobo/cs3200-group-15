const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const ClubEditorInline = ({club, deleteClub, updateClub}) => {
    const [clubCopy, setClubCopy] = useState(club)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={clubCopy.name}
                            onChange={(e)=>setClubCopy(clubCopy => ({...clubCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/api/clubs/${clubCopy.clubId}/students`}>
                            Students of Club
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateClub(clubCopy.clubId, clubCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteClub(club.clubId)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/api/clubs/${clubCopy.clubId}`}>
                            {clubCopy.name}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/api/clubs/${clubCopy.clubId}/students`}>
                            Students of Club
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default ClubEditorInline;