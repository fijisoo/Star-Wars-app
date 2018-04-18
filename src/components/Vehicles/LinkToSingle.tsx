import React from 'react';
import { Link } from 'react-router-dom';
import { Utils } from '../../utils/Utils';

const LinkToSingle = (props) => {
    return (
        <div>
            {props.vehicles.map((single)=>{
                return (
                    <li key={single.name}><Link to={`/vehicles/${encodeURIComponent(single.name)}`}>{single.name}</Link></li>
                )
            })}
        </div>
    )
}

export default LinkToSingle;