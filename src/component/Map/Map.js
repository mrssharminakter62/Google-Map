import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import {API_KEY} from './config'
 


const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 23.709484,
  lng: 90.434250
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey='YOUR_API_KEY'  //{API_KEY} 
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
          <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)