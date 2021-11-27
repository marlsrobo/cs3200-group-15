const {useState, useEffect} = React
const {useParams} = window.ReactRouterDOM;
const CLUB_URL = "http://localhost:8080/api/clubs"

const CourseEditor = (
    {
        schema = {
            title: {type: "text"},
            // clubId: {type: "text"}
        }
    }) => {
    const [item, setItem] = useState({})
    const {clubId} = useParams()
    useEffect(() => {
        findById(clubId)
    }, []);
    const findById = (clubId) =>
        fetch(`${CLUB_URL}/${clubId}`)
            .then(response => response.json())
            .then(item => setItem(item))
    return (
        <div>
            <h2>Course Editor {clubId}</h2>
            {JSON.stringify(item)}
            <ul className="list-group">
                {
                    Object.keys(item).map((key, ndx) => {
                        if(!schema[key]) return null
                        return(
                            <li>
                                {
                                    
                                }
                                <input
                                    className="form-control"
                                    type={schema[key].type}
                                    value={item[key]}/>
                            </li>)

                    })
                }
            </ul>
        </div>
    )
}

export default CourseEditor