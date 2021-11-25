import StudentList from "./students/student-list";
import StudentFormEditor from "./students/student-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/students", "/"]} exact={true}>
                    <StudentList/>
                </Route>
                <Route path="/students/:studentId" exact={true}>
                    <StudentFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
