import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Films from './components/Films/Films';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Species from './components/Species/Species';
import Starships from './components/Starships/Starships';
import Vehicles from './components/Vehicles/Vehicles';
import Links from './Links';
import StartPage from './components/StartPage/StartPage';

const Main = (props) => {
        return (
            <Router>
                <div>
                    <Links />
                    <Route exact path={'/'} component={StartPage} />
                    <Route replace path={"/films"} component={Films} />
                    <Route replace path={"/people"} render={({match}) => <People {...match}/>}/>
                    <Route replace path={"/planets"} component={Planets}/>
                    <Route replace path={"/species"} component={Species}/>
                    <Route replace path={"/starships"} component={Starships}/>
                    <Route replace path={"/vehicles"} component={Vehicles}/>
                </div>
            </Router>
        )
}

export default Main;
