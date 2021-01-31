import React from 'react';
import {AMBASSADORS_DESCRIPTION} from "../../constants/description"
import Head from 'next/head';

export default function Ambassadors() {

    return (
        <>
        <Head>
        <title>Ambassadors</title>
        </Head>

        <main>
            <h2>Ambassadors</h2>
            <Label>{AMBASSADORS_DESCRIPTION}</Label>
            <h3>Ask a question</h3>

        </main>
        
        </>
    );
}