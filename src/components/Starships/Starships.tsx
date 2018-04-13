import React from 'react';
import { HOC } from '../../HOC/Logger'

const Starships = (props) => {
    return (
        <div>
            <p>Starships works!</p>
        </div>
    )
}

export default HOC.ppHOC(Starships);