import React from 'react';
import { HOC } from '../../HOC/Logger'

const Vehicles = (props) =>{
    return (
        <div>
            <p>Vehicles works!</p>
        </div>
    )
}

export default HOC.ppHOC(Vehicles);