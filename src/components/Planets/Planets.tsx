import React from 'react';
import SinglePlanet from './SinglePlanet/SinglePlanet'
import { Router, Route, NavLink } from 'react-router-dom';
import LinkToSingle from './LinkToSingle';
import { HOC } from '../../HOC/Logger';
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

class Planets extends React.Component<Props, State> {
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

    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <p>Films works!</p>
                    <LinkToSingle filmNames={this.state.data.results}/>
                    <Route path={'/planets/:single'} render={({match}) => {
                        return (<SinglePlanet {...match} data={this.state.data.results}/>)
                    }}/>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Loading....</p>
                </div>
            )
        }

    }

}

export default HOC.ppHOC(Planets, 'planets');