import React from 'react';

export namespace Images {
    export function HeadImage(Component) {
        interface Props {
            params: { single: string }
        }

        interface State {
            img: string,
            isLoaded: boolean
        }

        return class HeadImageComponent extends React.Component<Props, State> {

            constructor(props) {
                super(props);
                this.state = {
                    img: '',
                    isLoaded: false
                }
            }

            fetchData = (searchText) => {
                fetch(`/api/search?name=${searchText}`, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((data) => {
                    data.text().then((data2) => {
                        this.setState({img: data2});
                        this.setState({isLoaded: true});
                    })
                }).catch((err) => {
                    console.log('ERRRRRRRRRRRR', err);
                });
            }

            componentDidMount() {
                this.fetchData(this.props.params.single);
            }

            componentWillReceiveProps(nextProps) {
                if (this.props.params.single !== nextProps.params.single) {
                    this.setState({isLoaded: false, img: ''});
                    this.fetchData(nextProps.params.single);
                }
            }

            render() {
                if (this.state.isLoaded) {
                    return (
                        <div>
                            <Component {...this.props} headImg={this.state.img}/>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>THIS IS NOT GONNA HAPPEN</p>
                        </div>
                    )
                }

            }
        }
    }
}