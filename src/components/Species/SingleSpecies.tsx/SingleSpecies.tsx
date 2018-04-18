import React from 'react';
import { Images } from '../../../HOC/Images';
import { Utils } from '../../../utils/Utils';

const SingleSpecies = (props) => {
    let data = Utils.getSectionData(props.species, props.params)[0];
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={props.headImg} alt=""/>
            <h5>{data.classification}</h5>
            <h5>{data.designation}</h5>
            <h5>{data.average_height}</h5>
            <h5>{data.average_lifespan}</h5>
            <h5>{data.eye_colors}</h5>
            <h5>{data.hair_colors}</h5>
            <h5>{data.skin_colors}</h5>
            <h5>{data.language}</h5>
            <h5>{data.homeworld}</h5>
            <h5>{data.people}</h5>
            <h5>{data.films}</h5>
        </div>
    )
}

export default Images.HeadImage(SingleSpecies);