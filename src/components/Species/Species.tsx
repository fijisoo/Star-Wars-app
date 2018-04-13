import React from 'react';
import { HOC } from '../../HOC/Logger';

const Species = (props) => {
    return (
        <div>
            <p>Species works!</p>
        </div>
    )
}

export default HOC.ppHOC(Species);