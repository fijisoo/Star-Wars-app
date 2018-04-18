import React from 'react';
import Links from './LinkToSingle';
import { FetchData } from './../../HOC/SectionData';
import { Route } from 'react-router-dom';
import SingleStarship from './SingleStarship/SingleStarship'

const Starships = (props) => {
    return (
        <div>
            <Links starships={props.data}/>
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