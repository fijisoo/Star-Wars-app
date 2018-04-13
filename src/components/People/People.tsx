import React from 'react';
import { HOC } from '../../HOC/Logger';

interface Props {
    costam: string
}

interface State {
    people: {}
}

class People extends React.Component <Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            people: {}
        }

    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <p>People works!</p>
            </div>
        )
    }

}

export default HOC.ppHOC(People);