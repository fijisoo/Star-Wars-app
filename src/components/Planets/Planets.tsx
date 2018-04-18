import React from 'react';
import SinglePlanet from './SinglePlanet/SinglePlanet'
import { Router, Route, NavLink } from 'react-router-dom';
import LinkToSingle from './LinkToSingle';
import { HOC } from '../../HOC/Logger';
import { FetchData } from '../../HOC/SectionData';

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