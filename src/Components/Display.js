import React from 'react'
import { useSelector } from 'react-redux'

export const Display = () => {
  const {myData}= useSelector((state)=> state.myDatas);

  return (
    <div className='dispaly'>
    <ul>
      {myData.map(items => (
        <li>{items}</li>
      ))}
    </ul>
  </div>
  )
}
