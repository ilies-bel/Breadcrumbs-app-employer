import React from 'react';
import Brand from '../Brand';
import {SETTINGS, SETTINGS_LABEL} from "../../constants/routes";
import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {AppBar, Avatar, Button, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

import { providers, signIn, signOut, getSession, Provider, session } from 'next-auth/client';
import axios from 'axios'
import Label from '../Label';

import '@/styles/navigation.module.css'

const drawerWidth = 240;
/*
const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}));
*/
const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    profile: {
        display: 'flex'
        //alignItems: 'center'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const ProfileItem = (props) => {
    const data = props.data ?? null;
    return (
        <div className="profile">
            <Label>{data && data.name}</Label>           
            <Button onClick={() => signIn()} title="Sign in" ><Avatar src={data && data.image} /></Button>
        </div>
    )
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        
        //let rec = getSession()
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const session = getSession().then(response => { this.setState({data: response?.user}) })
    }

    render() {
        const { classes } = this.props;
        const { data } = this.state;

        return (
            <header>
                <AppBar position="fixed" >
                    <Toolbar >
                        <Brand/>
                        <Typography variant="h6" noWrap>
                            {this.props.children}
                        </Typography>
                        <Link href={SETTINGS}>{SETTINGS_LABEL}</Link>
                        <ProfileItem data={data} />
                    </Toolbar>
                </AppBar>
            </header>
        )

    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
