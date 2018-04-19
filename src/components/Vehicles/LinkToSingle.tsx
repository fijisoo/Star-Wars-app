import React from 'react';
import { Link } from 'react-router-dom';

const LinkToSingle = (props) => {
    return (
        <div>
            {props.vehicles.map((single)=>{
                return (
                    <button key={single.name}><Link to={`/vehicles/${encodeURIComponent(single.name)}`}>{single.name}</Link></button>
                )
            })}
        </div>
    )
}

export default LinkToSingle;