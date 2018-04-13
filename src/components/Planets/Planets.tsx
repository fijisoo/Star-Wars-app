import React from 'react';
import { HOC } from '../../HOC/Logger'

interface Props {
    cokolwiek: string
}

interface State {
    isLoading: boolean
}

class Planets extends React.Component<Props, State> {

    constructor(props){
        super(props);

        this.state={
            isLoading: true
        }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/films/').then((data)=>{
            console.log('fetch w DID MOUNT');
            data.json().then((data)=>{
                console.log('isloading false')
                this.setState({isLoading: false});
            })
        })
        console.log('DID MOUNT');
    }

    render() {
        if(!this.state.isLoading){
            return (
                <div>
                    <p>Plantes works!</p>
                </div>
            )
        }else{
            return (
                <div>
                    <p>Loading....</p>
                </div>
            )
        }

    }

}

export default HOC.ppHOC(Planets);