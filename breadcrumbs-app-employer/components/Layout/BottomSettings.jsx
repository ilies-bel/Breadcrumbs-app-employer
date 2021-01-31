import Link from 'next/link';
import React from 'react';
import BottomLink from '../BottomLink';
import Label from '../Label';

class BottomSettings extends React.Component {
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
            <h1>Settings</h1>
            <Label>Ambassadors</Label>
           <Label>Calendar</Label>
           <Label>Intégrations</Label>
           <Label>Interview Tips</Label>
           <Label>Notifications</Label>

            <style jsx>{`
                div {
                    position: fixed;
                    display: inline-block;
                    width: max-content;
                    height: 100%;
                    border: 1px solid #C0C3C7;
                    top: 11.33%;
                }
            `}
            </style>
        </div>
        )
    };

}

export default BottomSettings;