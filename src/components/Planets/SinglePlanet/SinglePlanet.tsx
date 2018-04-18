import React from 'react';
import { Utils } from '../../../utils/Utils';
import {Images} from '../../../HOC/Images';

const SinglePlanet = (props) => {
    let data = Utils.getSectionData(props.planets, props.params)[0];
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={props.headImg} alt=""/>
            <h5>{data.diameter}</h5>
            <h5>{data.rotation_period}</h5>
            <h5>{data.orbital_period}</h5>
            <h5>{data.gravity}</h5>
            <h5>{data.population}</h5>
            <h5>{data.climate}</h5>
            <h5>{data.terrain}</h5>
            <h5>{data.surface_water}</h5>
            <h5>{data.residents}</h5>
            <h5>{data.films}</h5>
        </div>
    )
}

export default Images.HeadImage(SinglePlanet);