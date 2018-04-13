import React from 'react';
import {Link} from 'react-router-dom';

const LinkToSingle = (props) => {
    console.log('link to single', props);
    return (
        <div>
            <ul>
            {props.filmNames.map((singleFilm)=>{
                return <li key={singleFilm.title}><Link to={`/films/${singleFilm.title}`}>{singleFilm.title}</Link></li>
            })}
            </ul>
        </div>
    )
}

export default LinkToSingle;