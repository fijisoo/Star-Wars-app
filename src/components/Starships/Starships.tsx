import React from 'react';
import { Route } from 'react-router-dom';
import { FetchData } from './../../HOC/SectionData';
import SingleStarship from './SingleStarship/SingleStarship'
import LinkToSingle from './LinkToSingle';

const Starships = (props) => {
    return (
        <div>
            <LinkToSingle starships={props.data}/>
            <Route
                path={'/starships/:single'}
                render={({match}) => {
                    return (
                        <SingleStarship {...match} starships={props.data}/>
                    )
                }}
            />
        </div>
    )
}

export default FetchData.passComponent(Starships, 'starships');