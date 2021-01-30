import React from 'react';
import Label from '../../components/Label';
import BottomNav from '../../components/Layout/BottomNavigation';
import Header from '../../components/Layout/Header';
import {AMBASSADORS_DESCRIPTION} from "../../constants/description"



export default function Ambassadors() {

    return (
        <>
        <Header></Header>
        <BottomNav/>
        <main>
            <h2>Ambassadors</h2>
            <Label>{AMBASSADORS_DESCRIPTION}</Label>
            <h3>Ask a question</h3>

        </main>
        
        </>
    );
}