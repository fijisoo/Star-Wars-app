import React from 'react';

export namespace FetchImage {
    export function passComponent(WrappedComponent){

        interface Props{
            params: {single: string}
        }

        interface State{
            img: string
        }

        return class newComponent extends React.Component<Props, State>{

            state = {
                img: ''
            }

            componentDidMount() {
                console.log('FETCH IMAGE ', this.props);
                this.setState({img: ''});
                fetch(`/api/search?name=${this.props.params.single}`, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((data) => {
                    data.text().then((data2) => {
                        this.setState({img: data2});
                    })
                })
            }

            render(){
                if(this.state.img){
                    return <WrappedComponent {...this.props} img={this.state.img}/>
                }else{
                    return <div>
                        <p>ŁADOWANKO </p>
                    </div>
                }
            }
        }
    }
}