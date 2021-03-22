import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';
// import {API_KEY} from './config'
 


const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 23.709484,
  lng: 90.434250
};

function Direction(origin, destination) {
    const [directionResponse, setDirectonResponse] = useState(null);
  return (
    <LoadScript
      googleMapsApiKey='YOUR_API_KEY'  //{API_KEY} 
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        {
            origin !== '' && destination !== '' &&  <DirectionsService
            // required
            options={{
                destination: destination, // 'Gulshan 1 circle Dhaka Bangladesh',
                origin: origin , //'Banani 11 City Bank Bangladesh',
                travelMode: "DRIVING"
            }}
            // required
            callback={res =>{
                if(res !== null){
                    setDirectonResponse(res);
        }
            }}
           
          />
        }
        {
            directionResponse &&    <DirectionsRenderer
            // required
            options={{ 
            directions: directionResponse
            }}
        />
        }

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)