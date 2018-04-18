import React from 'react';
import Links from './LinkToSingle';
import SingleVehicle from './SingleVehicle/SingleVehicle';
import { FetchData } from '../../HOC/SectionData';
import { Route } from 'react-router-dom';

const Vehicles = (props) =>{
    return (
        <div>
            <p>Vehicles works!</p>
            <Links vehicles={props.data}/>
            <Route path={'/vehicles/:single'} render={({match})=>{
            return (
                <SingleVehicle {...match} vehicles={props.data} />
            )
            }
            }/>
        </div>
    )
}

export default FetchData.passComponent(Vehicles, 'vehicles');