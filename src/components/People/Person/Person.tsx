import React from 'react';
import { Utils } from '../../../utils/Utils';
import { Images } from '../../../HOC/Images';

// type TPerson = {
//     name: string,
//     height: number,
//     mass: number,
//     hair_color: string,
//     skin_color: string,
//     birth_year: string,
//     eye_color: string,
//     gender: string,
//     films: string[],
//     homeworld: string,
//     species: string[],
//     starships: string[],
//     vehicles: string[],
// }
//
// interface Props {
//     data: TPerson[],
//     params: {
//         person: string
//     }
// }
// interface State {
//
// }
//
//
//
// this.state = {
//     isLoaded: false,
//     personData: {
//         name: '',
//         height: null,
//         mass: null,
//         hair_color: '',
//         skin_color: '',
//         birth_year: '',
//         eye_color: '',
//         gender: '',
//         films: [],
//         homeworld: '',
//         species: [],
//         starships: [],
//         vehicles: [],
//     }
// }

const Person = (props) => {
    let data = Utils.getSectionData(props.data, props.params)[0];
    return (
                <div>
                    <h1>{data.name}</h1>
                    <img src={props.headImg} alt=""/>
                    <h5>{data.birth_year}</h5>
                    <h5>{data.eye_color}</h5>
                    <h5>{data.films}</h5>
                    <h5>{data.gender}</h5>
                    <h5>{data.hair_color}</h5>
                    <h5>{data.height}</h5>
                    <h5>{data.homeworld}</h5>
                    <h5>{data.mass}</h5>
                    <h5>{data.skin_color}</h5>
                    <h5>M O A R </h5>
                </div>
            )
}

export default Images.HeadImage(Person);