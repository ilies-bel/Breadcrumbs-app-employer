import React, { useState, useEffect } from 'react';
import Label from '../../components/Label';
import Calendar from '../../components/Calendar';
import axios from 'axios';
import { Switch, FormControlLabel } from '@material-ui/core';
import {AMBASSADORS_DESCRIPTION} from "../../constants/description"


const style = {
    calendar: {
        width: "800px",
        height: "500px",
        resize: "both",
        overflow: "scroll"
    },
    form: {
        display: "inline-block"
    }
}

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

axios.defaults.baseURL = 'http://localhost:3000';
const fetchData = async () => await
    axios.get('/api/recurrence')
        .then(res => ({
            error: false,
            resList: res.data,
        }))
        .catch(() => ({
                error: true,
                resList: null,
            }),
        );


export default function Hiring({resList, error}) {
    const [checked, setChecked] = useState(false);
    const [currentDate, setCurrentDate] = useState(null);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
      };
    
    const reservations = useEventSource('http://localhost:8080/stream');
    
    return (
        <>
            <h2>Hiring process</h2>
            
            <Label>est</Label>
            <h3>Hiring process</h3>

            <div>
                <FormControlLabel
                    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                    label={checked ? 'Edit' : 'Stop editing'}
                />
                {error && <div>There was an error.</div>}
                {!error && resList && (<div style={style.calendar}>  <Calendar resList={reservations} /> </div>)}
            </div>

            
        </>
    );
}


export const getServerSideProps = async () => {
    const data = await fetchData();
    return {
        props: data,
    };
}
