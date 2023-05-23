import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 23.807250118712297,
    lng: 90.36897335207053
};

function ContactGoogleMap() {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyD19i1VyN6ALSmUU2FyyHqkp5S50eDZfsc"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker
                        position={center}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(ContactGoogleMap)