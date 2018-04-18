import React from 'react';
import { Utils } from '../../../utils/Utils';
import { Images } from '../../../HOC/Images';

const Person = (props) => {
    let data = Utils.getSectionData(props.people, props.params)[0];
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={props.headImg} alt=""/>
            <h5>{data.birth_year}</h5>
            <h5>{data.eye_color}</h5>
            <h5>{data.gender}</h5>
            <h5>{data.hair_color}</h5>
            <h5>{data.height}</h5>
            <h5>{data.mass}</h5>
            <h5>{data.skin_color}</h5>
            <h5>{data.homeworld}</h5>
            <h5>{data.films}</h5>
            <h5>{data.species}</h5>
            <h5>{data.starships}</h5>
            <h5>{data.behicles}</h5>
        </div>
    )
}

export default Images.HeadImage(Person);