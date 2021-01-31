import React from 'react';
import Brand from '../Brand';
import {SETTINGS, SETTINGS_LABEL} from "../../constants/routes";
import Link from "next/link";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <ul>
                    <li>

                        <Brand/>

                        {this.props.children}


                        <Link href={SETTINGS}>{SETTINGS_LABEL}</Link>
                    </li>
                </ul>


            </header>
        )
    }
}

export default Header;