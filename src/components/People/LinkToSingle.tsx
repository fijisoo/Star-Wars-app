import React from 'react';
import { Link } from 'react-router-dom';

const LinkToSingle = (props) => {
    return (
        <div>
            {props.people.map((person)=>{
                return (<li key={person.name}><Link to={`/people/${person.name}`}>{person.name}</Link></li>)
            })}
        </div>
    )
}

export default LinkToSingle;