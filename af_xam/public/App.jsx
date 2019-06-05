import React, {Component} from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import Home from './Home';
import AddCourse from './AddCourse';
import AddSubject from './AddSubject';
import ViewCourse from './ViewCourse';
import ViewSubject from './viewSubjects';

class App extends Component {

    constructor(props){
        super(props);
    }



    render() {
        return (
            <div>
            <Router>
                <div >
                    <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
                        <ul className='navbar-nav'>
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/addCourse'} className="nav-link">Add Course</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/addSub'} className="nav-link">Add Subject</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/viewCourse'} className="nav-link">View Course</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/viewSub'} className="nav-link">View Subjects</Link>
                            </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/home'  render={props => {return <Home/>}}/>
                        <Route path='/addCourse' render={props => {return <AddCourse/>}}/>
                        <Route path='/addSub' render={props => {return <AddSubject/>}}/>
                        <Route path='/viewCourse' render={props => {return <ViewCourse/>}}/>
                        <Route path='/viewSub' render={props => {return <ViewSubject/>}}/>

                    </Switch>
                </div>
            </Router>
            </div>

        )
    }
}

export  default  App;