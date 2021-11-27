import ClubList from "./clubs/club-list";
import StudentList from "./students/student-list";
import ClubEditorForm from "./clubs/club-editor-form";
import StudentEditorForm from "./students/student-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/clubs", "/"]} exact={true}>
                    <ClubList/>
                </Route>
                <Route path="/clubs/:clubId" exact={true}>
                    <ClubEditorForm/>
                </Route>
                <Route path="/clubs/:clubId/students" exact={true}>
                    <StudentList/>
                </Route>
                <Route path="/students/:studentId" exact={true}>
                    <StudentEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
