import React from 'react';
import { Link } from 'react-router-dom';

const LinkToSingle = (props) => {
    console.log('LINK TO SINGLE', props);
    return (
        <div>
            <ul>
                {props.planets.map((single) => {
                    return <button key={single.name}><Link
                        to={`/planets/${encodeURIComponent(single.name)}`}>{single.name}</Link></button>
                })}
            </ul>
        </div>
    )
}

export default LinkToSingle;