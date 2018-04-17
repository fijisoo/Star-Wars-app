import React from 'react';

export namespace Images {
    export function HeadImage(Component) {
        interface Props {
            params: {single: string}
        }
        interface State {
            img: string,
            isLoaded: boolean
        }

        return class HeadImageComponent extends React.Component<Props, State> {

            constructor(props) {
                super(props);
                this.state ={
                    img: '',
                    isLoaded: false
                }
            }

            fetchData = (...rest) => {
                console.log('FETCH DATA PARAMS ', rest[0])
                fetch(`/api/search?name=${rest[0] ? rest[0].params.single : this.props.params.single}`, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((data) => {
                    data.text().then((data2) => {
                        console.log('DATA 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data2);
                        this.setState({img: data2});
                        this.setState({isLoaded: true});
                    })
                }).catch((err)=>{
                    console.log('ERRRRRRRRRRRR', err);
                });
            }

            componentDidMount() {
                this.fetchData();
            }

            componentWillReceiveProps(nextProps) {
                if (this.props.params.single !== nextProps.params.single) {
                    this.setState({isLoaded: false, img: ''});
                    this.fetchData(nextProps);
                }
            }

            render(){
                if(this.state.isLoaded){
                    return (
                        <div>
                            <Component {...this.props} headImg={this.state.img}/>
                        </div>
                    )
                }else{
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