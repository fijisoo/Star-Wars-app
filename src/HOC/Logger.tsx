import React from 'react';

export namespace HOC {

    export function ppHOC(WrappedComponent, ...rest) {

        return class pp extends React.Component {
            render() {
                console.log('hoc props: ', rest[0]);
                return <WrappedComponent {...this.props}/>
            }
        }
    }

}
