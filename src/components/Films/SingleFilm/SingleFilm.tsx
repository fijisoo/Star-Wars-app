import React from 'react';
import { FetchImage } from './../../../HOC/FetchImage';

interface filmData {
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
        if (data2.title == match.single) {
            return data2;
        }
    })
}

interface Props {
    data: filmData[],
    params: { componentName: string },
    setFilmUrl: (string) => void,
    img: string
}

interface State {
    img: string
}

class SingleFilm extends React.Component<Props, State> {

    componentDidMount(){
        this.setState({img: this.props.img});
    }

    state = {
        img: ''
    }

    render() {
        console.log('jaki jest state', this.state);
        let data = getFilmData(this.props.data, this.props.params)[0];
        return (
            <div>
                <h1>Title: {data.title}</h1>
                <img src={this.state.img} alt=""/>
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

export default FetchImage.passComponent(SingleFilm);