import React from 'react';
import {Link} from 'react-router-dom';

const LinkToSingle = (props) => {
    return (
        <div>
            <ul>
            {props.films.map((singleFilm)=>{
                return <li key={singleFilm.title}><Link to={`/films/${encodeURIComponent(singleFilm.title)}`}>{singleFilm.title}</Link></li>
            })}
            </ul>
        </div>
    )
}

export default LinkToSingle;