import React from 'react';
import {Link} from 'react-router-dom';

const LinkToSingle = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {props.filmNames.map((single)=>{
                    return <li key={single.name}><Link to={`/planets/${single.name}`}>{single.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default LinkToSingle;