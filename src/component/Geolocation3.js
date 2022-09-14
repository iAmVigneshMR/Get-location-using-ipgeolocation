import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Geolocation3 = () => {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        getUserLocationFromAPI()
    }, [])

    const getUserLocationFromAPI = async () => {
        await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=feca4b25377147a189df805f6d0dc8be')
            .then(response => {
                console.log(response.data);
                setLocation(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            <p>{location.city}</p>
            <p>{location.country}</p>
            <p>{location.continent}</p>
        </div>
    )
}

export default Geolocation3