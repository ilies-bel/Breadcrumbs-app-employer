import React from 'react';
import {theme} from '../utils/themes'


class BottomLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            hover: false
        }
        this.mouse = () => {
            console.log("hover")
            this.setState((state) => {
                state.hover = true
            })
        }
        this.handleClick = () => {
            console.log("clicked")
            this.setState((state) => {
                state.selected = !state.selected
            })
            console.log(this.state.selected)
        }
    }    

    render (){
        return(
        <span onClick={this.handleClick}>
            {this.props.children}
            <style jsx>
                {`
                span {
                    width: 100%;
                    height: 100px;
                    display: inline-block;
                    width: min-content;
                    padding: 30px;
                    align-items: center;
                    }
                    `}
            </style>
            <style jsx>
                {`
                span:hover {
                    background: ${theme.background.default};
                    border-style: ${this.state.hover ? 'solid' : 'none'};
                    border-width: 4px;
                    color: ${theme.label.main};
                    }
                span.selected {
                    background: ${theme.primary.main};
                    border-style: 'none';
                    border-width: 4px;
                    color: ${theme.label.selected};
                }
                `}
            </style>
        </span>
        )
    }
}

export default BottomLink;