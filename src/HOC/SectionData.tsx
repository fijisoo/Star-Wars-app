import React from 'react';
import { Utils } from '../utils/Utils';

export namespace FetchData {
    export function passComponent(WrappedComponent, ...rest) {

        interface Props {

        }

        interface State {
            data: {}[],
            isLoaded: boolean
        }

        return class newComponent extends React.Component<Props, State> {
            constructor(props) {
                super(props);
                this.state = {
                    data: [{}],
                    isLoaded: false
                }
            }

            componentDidMount(){
                Utils.fetchData(rest[0]).then((data)=>{
                    this.setState({data: data.results, isLoaded: true});
                })
            }

            render() {
                if (this.state.isLoaded) {
                    return <WrappedComponent {...this.props} data={this.state.data}/>
                }else {
                    return (
                        <div>
                            <p>ŁADOWANKO</p>
                        </div>
                    )
                }
            }
        }
    }
}