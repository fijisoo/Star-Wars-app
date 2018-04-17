import React from 'react';
import { Route, Link } from 'react-router-dom';
import LinkToSingle from './LinkToSingle';
import SingleFilm from './SingleFilm/SingleFilm';
import { FetchData } from '../../HOC/SectionData';

// interface Props {
//     data: {
//         count: number,
//         next: number,
//         previous: number,
//         results: {}[]
//     }
// }
//
// interface State {
//
// }

const Films = (props) => {
    return (
        <div>
            <p>Films works!</p>
            <LinkToSingle filmsNames={props.data}/>
            <Route path={'/films/:single'} render={({match}) => {
                return (<SingleFilm {...match} data={props.data}/>)
            }}/>
        </div>
    )
}

export default FetchData.passComponent(Films, 'films');