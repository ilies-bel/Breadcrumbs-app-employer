import Link from 'next/link';
import React from 'react';
import BottomLink from '../BottomLink';

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
        <div className='bar'>
            <BottomLink><Link href="/candidates">Candidates</Link> </BottomLink>
           <BottomLink><Link href="/settings">Settings</Link></BottomLink>
            <BottomLink><Link href="/ambassadors">Question / Answer</Link> </BottomLink>
            <BottomLink><Link href="/office">Office</Link> </BottomLink>

            <style jsx>{`
                .bar {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    
                    left: -0.15%;
                    right: 92.31%;
                }            
            `}</style>
        </div>
        )
    };

}

export default BottomNav;