import React from 'react';
import { Images } from '../../../HOC/Images';
import { Utils } from '../../../utils/Utils';

// interface filmData {
//     title: string,
//     episode_id: number,
//     producer: string,
//     opening_crawl: string,
//     director: string,
//     planets: string[],
//     release_date: string,
//     species: string[],
//     starships: string[],
//     vehicles: string[]
// }
//
// interface Props {
//     data: filmData[],
//     params: { single: string }, //params single to jest /film/:single
//     headImg: string
// }

const SingleFilm = (props) => {
        let data = Utils.getSectionData(props.films, props.params)[0];
        return (
            <div>
                <h1>Title: {data.title}</h1>
                <img src={props.headImg} alt={data.title}/>
                <h4>Episode No: {data.episode_id}</h4>
                <h4>Opening...: {data.opening_crawl}</h4>
                <h4>Director: {data.director}</h4>
                <h4>Producer: {data.producer}</h4>
                <h4>Release date: {data.release_date}</h4>
                <h4>species: {data.species}</h4>
                <h4>starships: {data.starships}</h4>
                <h4>vehicles: {data.vehicles}</h4>
                <h4>characters: {data.characters}</h4>
                <h4>planets: {data.planets}</h4>
            </div>
        )
    }

export default Images.HeadImage(SingleFilm);