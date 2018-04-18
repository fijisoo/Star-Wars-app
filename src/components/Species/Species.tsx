import React from 'react';
import { FetchData } from '../../HOC/SectionData';
import LinkToSingle from '../Species/LinkToSingle';
import SingleSpecies from './SingleSpecies.tsx/SingleSpecies';
import { Route } from 'react-router-dom';
const Species = (props) => {
    console.log('SPECIES PROPS: ', props);
    return (
        <div>
            <LinkToSingle species={props.data}/>
            <Route path={'/species/:single'} render={({match})=>{
                return <SingleSpecies {...match} species={props.data}/>}
                } />
            <p>Species works!</p>
        </div>
    )
}

export default FetchData.passComponent(Species, 'species');