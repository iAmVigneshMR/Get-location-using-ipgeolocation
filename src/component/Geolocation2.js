import axios from 'axios';
import React, { useState } from 'react'

const Geolocation2 = () => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [error, setError] = useState(null);
    const geolocationAPI = navigator.geolocation;

    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            setError('Geolocation API is not available in your browser!')
        } else {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                setLat(coords.latitude);
                setLong(coords.longitude);
            }, (error) => {
                setError('Something went wrong getting your position!')
            })
        }
    }
    getUserCoordinates();
    if (!geolocationAPI) {
        setError('Geolocation API is not available in your browser!')
    } else {
        geolocationAPI.getCurrentPosition((position) => {
            const { coords } = position;
            setLat(coords.latitude);
            setLong(coords.longitude);
        }, (error) => {
            setError('Something went wrong getting your position!')
        })
    }

    return (
        <div>
            <p>Your coordinates are: {[lat]}</p>
            <p>Your coordinates are: {[long]}</p>
        </div>
    )
}

export default Geolocation2;