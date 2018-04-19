import React from 'react';
import { Route, Link } from 'react-router-dom';

const LinkToSingle = (props) => {
    return (
        <div>
            <ul>
                {props.films.map((singleFilm) => {
                    return <button key={singleFilm.title}><Link
                        to={`/films/${encodeURIComponent(singleFilm.title)}`}>{singleFilm.title}</Link></button>
                })}
            </ul>
        </div>
    )
}

export default LinkToSingle;