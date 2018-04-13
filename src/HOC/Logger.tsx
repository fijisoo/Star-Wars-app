import React from 'react';

export namespace HOC {

    export function ppHOC(WrappedComponent) {

        return class pp extends React.Component {

            render() {
                console.log('hoc props: ', {...this.props});
                return <WrappedComponent {...this.props}/>
            }
        }
    }

}
