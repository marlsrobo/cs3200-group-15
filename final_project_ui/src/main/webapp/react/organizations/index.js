import ClubList from "./clubs/club-list";
import StudentList from "./students/student-list";
import LocationList from "./locations/location-list"
import LocationClubList from "./clubs/location-club-list"
import ClubEditorForm from "./clubs/club-editor-form";
import StudentEditorForm from "./students/student-form-editor";
import LocationEditorForm from "./locations/location-editor-form";
import ClubStudentList from "./students/club-student-list";
import StudentClubList from "./clubs/student-club-list";
import LocationEditorFormFromClub from "./locations/location-editor-form-from-club";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/clubs", "/"]} exact={true}>
                    <ClubList/>
                </Route>
                <Route path={["/locations", "/"]} exact={true}>
                                    <LocationList/>
                                </Route>
                <Route path="/locations/:locationId" exact={true}>
                                    <LocationEditorForm/>
                                </Route>
                <Route path="/clubs/:clubId/location" exact={true}>
                                                    <LocationEditorFormFromClub/>
                                                </Route>
                <Route path="/locations/:locationId/clubs" exact={true}>
                                    <LocationClubList/>
                                </Route>
                <Route path={["/students", "/"]} exact={true}>
                                                    <StudentList/>
                                                </Route>
                <Route path="/clubs/:clubId" exact={true}>
                    <ClubEditorForm/>
                </Route>
                <Route path="/clubs/:clubId/students" exact={true}>
                    <ClubStudentList/>
                </Route>
                <Route path="/students/:studentId" exact={true}>
                    <StudentEditorForm/>
                </Route>
                <Route path="/students/:studentId/clubs" exact={true}>
                                    <StudentClubList/>
                                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
