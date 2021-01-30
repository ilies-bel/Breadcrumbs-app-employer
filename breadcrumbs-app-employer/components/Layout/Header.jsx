import React from 'react';
import Brand from '../Brand';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <ul>
                    <li><Brand/></li>
                {this.props.children}
                </ul>
        
            </header>
        )
    }
}

export default Header;