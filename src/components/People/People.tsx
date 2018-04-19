import React from 'react';
import { Route } from 'react-router-dom'
import { FetchData } from '../../HOC/SectionData';
import Person from './Person/Person';
import LinkToSingle from './LinkToSingle';

const People = (props) => {
            return (
                <div>
                    <p>People works!</p>
                    <LinkToSingle people={props.data}/>
                    <Route path={'/people/:single'} render={({match}) => {
                        return <Person {...match} people={props.data}/>
                    }}/>
                </div>
            )
}

export default FetchData.passComponent(People, 'people');