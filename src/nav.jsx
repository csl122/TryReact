import React from 'react';

class MyNav extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.nav.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default MyNav;