import React from 'react';
import { Link, Router, Route } from 'react-router-dom'
import LinkToSingle from './LinkToSingle';
import Person from './Person/Person';
import { HOC } from '../../HOC/Logger';
import { Utils } from '../../utils/Utils';
import { FetchData } from '../../HOC/SectionData';

interface Props {
    data: {
        count: number,
        next: number,
        previous: number,
        results: {}[]
    }
}

interface State {

}

class People extends React.Component <Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div>
                    <p>People works!</p>
                    <LinkToSingle people={this.props.data}/>
                    <Route path={'/people/:single'} render={({match}) => {
                        return <Person {...match} data={this.props.data}/>
                    }}/>
                </div>
            )
    }
}

export default FetchData.passComponent(People, 'people');