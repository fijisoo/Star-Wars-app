import React from 'react';
import { Images } from '../../../HOC/Images';
import { Utils } from '../../../utils/Utils';

const SingleVehicle = (props) => {
    let data = Utils.getSectionData(props.vehicles, props.params)[0];
    console.log('PROPS SINGLE VEHICLE: ', props.params);
    return (
        <div>
            <img src={props.headImg} alt=""/>
            <h1>{data.name}</h1>
            <h5>{data.model}</h5>
            <h5>{data.vehicle_class}</h5>
            <h5>{data.manufacturer}</h5>
            <h5>{data.length}</h5>
            <h5>{data.cost_in_credits}</h5>
            <h5>{data.crew}</h5>
            <h5>{data.passengers}</h5>
            <h5>{data.max_atmosphering_speed}</h5>
            <h5>{data.cargo_capacity}</h5>
            <h5>{data.consumables}</h5>
            <h5>{data.films}</h5>
            <h5>{data.pilots}</h5>
        </div>
    )
}

export default Images.HeadImage(SingleVehicle);