import React from 'react';
import { Route, Link } from 'react-router-dom';
import LinkToSingle from './LinkToSingle';
import SingleFilm from './SingleFilm/SingleFilm';
import { FetchData } from '../../HOC/SectionData';

const Films = (props) => {
    return (
        <div>
            <p>Films works!</p>
            <LinkToSingle films={props.data}/>
            <Route path={'/films/:single'} render={({match}) => {
                return (<SingleFilm {...match} films={props.data}/>)
            }}/>
        </div>
    )
}

export default FetchData.passComponent(Films, 'films');