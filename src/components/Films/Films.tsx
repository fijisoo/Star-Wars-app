import React from 'react';
import { Route } from 'react-router-dom';
import { FetchData } from '../../HOC/SectionData';
import SingleFilm from './SingleFilm/SingleFilm';
import LinkToSingle from './LinkToSingle';

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