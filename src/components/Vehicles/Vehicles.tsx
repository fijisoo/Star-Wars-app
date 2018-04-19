import React from 'react';
import { Route } from 'react-router-dom';
import { FetchData } from '../../HOC/SectionData';
import SingleVehicle from './SingleVehicle/SingleVehicle';
import LinkToSingle from './LinkToSingle';

const Vehicles = (props) => {
    return (
        <div>
            <p>Vehicles works!</p>
            <LinkToSingle vehicles={props.data}/>
            <Route
                path={'/vehicles/:single'}
                render={({match}) => {
                    return (
                        <SingleVehicle {...match} vehicles={props.data}/>
                    )
                }
                }/>
        </div>
    )
}

export default FetchData.passComponent(Vehicles, 'vehicles');