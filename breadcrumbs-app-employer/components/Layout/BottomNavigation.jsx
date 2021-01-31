import Link from 'next/link';
import React from 'react';
import BottomLink from '../BottomLink';
import {
    AMBASSADORS,
    AMBASSADORS_LABEL,
    CANDIDATES,
    CANDIDATES_LABEL, HIRING_PROCESS, HIRING_PROCESS_LABEL, INSIGHT, INSIGHT_LABEL, OFFICE,
    OFFICE_LABEL,
    SETTINGS,
    SETTINGS_LABEL, SOCIAL, SOCIAL_LABEL, TIPS, TIPS_LABEL
} from "../../constants/routes";

class BottomNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            setValue: () => {}
        }
        const handleChange = (event, newValue) => {
            //history.push(newValue);
            this.state.setValue(newValue);
        };
    }

    render () {
        return(
        <div>
            <BottomLink><Link href={CANDIDATES}>{CANDIDATES_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={HIRING_PROCESS}>{HIRING_PROCESS_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={TIPS}>{TIPS_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={OFFICE}>{OFFICE_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={AMBASSADORS}>{AMBASSADORS_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={SOCIAL}>{SOCIAL_LABEL}</Link> </BottomLink>
            <BottomLink><Link href={INSIGHT}>{INSIGHT_LABEL}</Link> </BottomLink>



            <style jsx>{`
            position: fixed;
            display: inline-block;
            width: 100px;
            height: 100%;
            
            left: -0.15%;
            right: 92.31%;
            top: 11.33%;
            `}</style>
        </div>
        )
    };

}

export default BottomNav;