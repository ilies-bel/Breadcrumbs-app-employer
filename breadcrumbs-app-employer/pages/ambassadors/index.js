import React, { useState, useEffect } from 'react';
import {AMBASSADORS_DESCRIPTION} from "../../constants/description"
import Head from 'next/head';
import Label from '../../components/Label';
import axios from 'axios';

const useEventSource = (url) => {
    const [data, updateData] = useState(null);

    useEffect(() => {
        const source = new EventSource(url);

        source.onmessage = function logEvents(event) {      
            updateData(JSON.parse(event.data));     
        }
    }, [])

    return data;
}

axios.defaults.baseURL = 'http://localhost:8080';
const fetchData = async () => await
    axios.get('/facet.json')
        .then(res => ({
            error: false,
            facet: res.data.entries,
        }))
        .catch(() => ({
                error: true,
                facet: null,
            }),
        );

export default function Ambassadors({facet, error}) {
    const data2 = useEventSource('http://localhost:8080/stream');

    return (
        <>
        <Head>
        <title>Ambassadors</title>
        </Head>

            <h2>Ambassadors</h2>
            <Label>{AMBASSADORS_DESCRIPTION}</Label>
            <h3>Ask a question</h3>
            <div>
            {error && <div>There was an error.</div>}
            <p>{ data2 ? data2.event : "ERREUR de lecture de stream "}</p>
            <ol>
                <li>Firsy Ambassador</li>
            </ol>
            </div>
        
        </>
    );
}
