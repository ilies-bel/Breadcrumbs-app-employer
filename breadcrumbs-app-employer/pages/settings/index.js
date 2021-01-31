import React from 'react';
import BottomSettings from '../../components/Layout/BottomSettings';
import Header from '../../components/Layout/Header'
import Head from 'next/head';
import { SETTINGS } from "../../constants/title"

function Settings() {

    return (
        <>
        <Head>
            <title>{SETTINGS}</title>
        </Head>
        <Header></Header>
        <main>
            <ul>

            </ul>
        </main>
        <BottomSettings/>
        </>

    );
}

export default Settings;