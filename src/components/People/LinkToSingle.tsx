import React from 'react';
import { Link } from 'react-router-dom';

const LinkToSingle = (props) => {
    return (
        <div>
            {props.people.map((person) => {
                return (<button key={person.name}><Link
                    to={`/people/${encodeURIComponent(person.name)}`}>{person.name}</Link></button>)
            })}
        </div>
    )
}

export default LinkToSingle;