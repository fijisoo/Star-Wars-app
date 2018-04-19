import React from 'react';
import { Route } from 'react-router-dom';
import { FetchData } from '../../HOC/SectionData';
import SinglePlanet from './SinglePlanet/SinglePlanet'
import LinkToSingle from './LinkToSingle';

const Planets = (props) => {
    console.log('PLANETS PROPS: ', props);
        return (
            <div>
                <p>Films works!</p>
                <LinkToSingle planets={props.data}/>
                <Route path={'/planets/:single'} render={({match}) => {
                    return (<SinglePlanet {...match} planets={props.data}/>)
                }}/>
            </div>
        )
}

export default  FetchData.passComponent(Planets, 'planets');