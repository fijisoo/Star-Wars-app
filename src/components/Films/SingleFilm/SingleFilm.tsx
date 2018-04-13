import React from 'react';
import { log } from 'util';

interface filmData  {
    title: string,
    episode_id: number,
    producer: string,
    opening_crawl: string,
    director: string,
    planets: string[],
    release_date: string,
    species: string[],
    starships: string[],
    vehicles: string[]
}

function getFilmData(data: filmData[], match) {
    return data.filter((data2: filmData): filmData => {
        if (data2.title == match.film) {
            return data2;
        }
    })
}

interface Props {
    filmData: filmData[],
    params: {film: string},
    setFilmUrl: (string)=>void

}

interface State {

}

class SingleFilm extends React.Component<Props, State> {

    componentDidMount() {
        console.log('COMPONNET WILL MOUNT HERE ');
        // fetch('/api/search?name=Radiohead', {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // }).then((data) => {
        //     data.json().then((data2) => {
        //         console.log(data2);
        //     })
        // })
    }

    render() {
        let data = getFilmData(this.props.filmData, this.props.params)[0];
        return (
            <div>
                <h1>Title: {data.title}</h1>
                <h4>Episode No: {data.episode_id}</h4>
                <h4>Opening... : {data.opening_crawl}</h4>
                <h4>Producer: {data.producer}</h4>
                <h4>Director: {data.director}</h4>
                <h4>planets: {data.planets}</h4>
                <h4>release_date: {data.release_date}</h4>
                <h4>species: {data.species}</h4>
                <h4>starships: {data.starships}</h4>
                <h4>vehicles: {data.vehicles}</h4>
            </div>
        )
    }
}

export default SingleFilm;