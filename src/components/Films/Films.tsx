import React from 'react';
import { Route, Link } from 'react-router-dom';
import { HOC } from '../../HOC/Logger'
import LinkToSingle from './LinkToSingle';
import SingleFilm from './SingleFilm/SingleFilm';
import { Utils } from '../../utils/Utils';

interface Props {

}

interface State {
    isLoaded: boolean,
    data: {
        count: number,
        next: number,
        previous: number,
        results: {}[]
    },
    filmUrl: string

}

class Films extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {
                count: null,
                next: null,
                previous: null,
                results: [{}]
            },
            filmUrl: ''

        }
    }

    componentDidMount(){
        Utils.fetchData('films').then((data) => {
            this.setState({isLoaded: true, data: data});
        });
    }

    setFilmUrl(filmUrl: string){
        // this.setState({filmUrl: filmUrl});
    }

    render() {
        if(this.state.isLoaded){
            console.log(this.state.data);
            return (
                <div>
                    <p>Films works!</p>
                    <LinkToSingle filmNames={this.state.data.results}/>
                    <Route path={'/films/:film'} render={({match}) => {
                        return (<SingleFilm {...match} filmData={this.state.data.results}/>)
                    }}/>
                </div>
            )
        }else{
            return (
                <div>
                    <p>L O A D I N G  (:</p>
                </div>
            )
        }
    }
}

export default HOC.ppHOC(Films);