import React from 'react'
import ButtonsList from './ButtonsList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  return (
    <div className='w-[calc(100%-11rem)]'>
        <ButtonsList/>
        <VedioContainer/>
    </div>
  )
}

export default MainContainer