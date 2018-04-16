import React from 'react';
import {FetchImage} from './../../../HOC/FetchImage';

interface Props{
    img: string
}

interface State{

}

class SinglePlanet extends React.Component<Props, State>{

    componentDidMount(){
        console.log('single planet works', this.props);
    }

    render(){
        return (
            <div>
                <img src={this.props.img} alt=""/>
                <p>LELELEL</p>
            </div>
        )
    }
}

export default FetchImage.passComponent(SinglePlanet)