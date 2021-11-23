import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);
    const createUser = (user) => userService.createUser(user).then(() => history.back())
    const findUserById = (id) => userService.findUserById(id).then(user => setUser(user))
    const deleteUser = (id) => userService.deleteUser(id).then(() => history.back())
    const updateUser = (id, newUser) => userService.updateUser(id, newUser).then(() => history.back())
    return (
        <div>
            <h2>User Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) => setUser(user => ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) => setUser(user => ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) => setUser(user => ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) => setUser(user => ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <button
                onClick={() => {history.back()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button
                onClick={() => createUser(user)}>
                Create
            </button>
            <button
                onClick={() => updateUser(user.id, user)}>
                Save
            </button>
        </div>
    )
}

export default UserFormEditor