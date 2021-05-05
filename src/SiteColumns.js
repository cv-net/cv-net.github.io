import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import keys from './keys';

const FlexContainer = styled.div`
    display: flex;
`;

function SiteColumns() {
    return(
        < FlexContainer className='container' >
            < Professional className='border border-5' />
            < MainContent className='border border-5' />
            < Toolbar className='border border-5' />
        </ FlexContainer >
    );
}

export default SiteColumns;

function Professional(props) {
    const [ temperature, setTemp ] = useState();
    const [ iconUrl, setUrl ] = useState('');

    useEffect(async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${keys.openweatherdata}`);
            console.log(res);
            console.log(res.data.weather[0].icon)
            setUrl(`https://openweathermap.org/img/w/${res.data.weather[0].icon}.png"`);
            setTemp(parseInt(res.data.main.temp))
            console.log(iconUrl);
        } catch (err) {
            console.log(err);
        }
    }, [])

    return(
        <nav className='nav flex-column border border-5 border-success p-4'>
            <p>Khalil Abdellah</p>
            <i>Philadelphia, PA</i>
            <h5>{temperature}&#176;</h5> 
            <img src={iconUrl}></img>
            <a className='nav-link active' href='#'>Home</a>
            <a className='nav-link active' href='#'>freq.ly used code</a>
            <a className='nav-link active' href='#'>engineering portfolio</a>
            <a className='nav-link active' href='#'>data journalism</a>
        </nav>
    );
}

function MainContent() {
    return(
        <>
        </>
    );
}

function Toolbar() {
    return(
        <>
        </>
    );
}