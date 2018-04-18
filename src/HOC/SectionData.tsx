import React from 'react';
import _ from 'lodash';
import { Utils } from '../utils/Utils';

export namespace FetchData {

    export function passComponent(WrappedComponent, search) {
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
                    data: [],
                    isLoaded: false
                }
            }

            componentDidMount() {
                let costam = (callback, counter) => {
                    callback.then((data) => {
                        let newData = _.cloneDeep(this.state.data);
                        newData = [...newData, ...data.results];
                        this.setState({data: newData});
                        if (data.next) {
                            counter++;
                            let newSearch = search + `/?page=${counter}`;
                            costam(Utils.fetchData(newSearch),counter);
                        }else{
                            this.setState({isLoaded: true});
                        }
                    })
                }
                costam(Utils.fetchData(search), 1);
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