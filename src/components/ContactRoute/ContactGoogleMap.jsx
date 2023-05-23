import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = {
    lat: 23.810331,
    lng: 90.412521
};

function ContactGoogleMap() {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyD19i1VyN6ALSmUU2FyyHqkp5S50eDZfsc"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
                <Marker
                    position={position}
                >

                </Marker>
            </LoadScript>
        </div>
    )
}

export default React.memo(ContactGoogleMap)