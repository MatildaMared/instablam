import React from 'react'
import Photo from './Photo';

function AddLocationData({photo}) {
  return (
    <div>
      <h1>Add location data</h1>
      <Photo photo={photo} />
    </div>
  )
}

export default AddLocationData
