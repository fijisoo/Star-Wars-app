import React from 'react';
import { Link } from 'react-router-dom'

const Links = (props) => {
    return (
        <div>
            {props.starships.map((single)=>{
                return (<li key={single.name}><Link to={`/starships/${encodeURIComponent(single.name)}`}>{single.name}</Link></li>)
            })}
        </div>
    )
}

export default Links;