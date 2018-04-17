import React from 'react';
import { Utils } from '../../../utils/Utils';
import {Images} from '../../../HOC/Images';

type PlanetData = {
    diameter: string,
    films: string[],
    name: string,
    orbital_period: number,
    population: number,
    residents: string[],
    surface_water: number,
    terrain: string[],
}

interface Props{
    img: string
    data: PlanetData[],
    params: { componentName: string }
}

interface State{

}

class SinglePlanet extends React.Component<Props, State>{

    constructor(props){
        super(props);
        console.log('SINGLE PLANET PROPS', this.props)
    }

    componentDidMount(){

    }

    render(){
        let data = Utils.getSectionData(this.props.data, this.props.params)[0];
        console.log(data);
            return (
                <div>
                    <h1>{data.name}</h1>
                    <h5>{data.films}</h5>
                    <h5>{data.population}</h5>
                    <h5>{data.surface_water}</h5>
                    <h5>{data.terrain}</h5>
                    <img src={this.props.img} alt=""/>
                    <p>LELELEL</p>
                </div>
            )
        }
}

export default Images.HeadImage(SinglePlanet);