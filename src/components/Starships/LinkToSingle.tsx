import React from 'react';
import { Link } from 'react-router-dom'

const LinkToSingle = (props) => {
    return (
        <div>
            {props.starships.map((single) => {
                return (<button key={single.name}><Link
                    to={`/starships/${encodeURIComponent(single.name)}`}>{single.name}</Link></button>)
            })}
        </div>
    )
}

export default LinkToSingle;