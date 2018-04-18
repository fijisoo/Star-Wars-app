import React from 'react';
import { Link } from 'react-router-dom';


const LinkToSingle = (props) => {
    console.log('LINK TO SPECIES PROPS ', props.speciesData);
    return (
        <div>
            {props.species.map((single)=>{
            return <li key={single.name}><Link to={`/species/${encodeURIComponent(single.name)}`}>{single.name}</Link></li>
            })}
        </div>
    )
}

export default LinkToSingle;
