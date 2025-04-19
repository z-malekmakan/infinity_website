import { Ichildren } from '@/interfaces/interfaces'
import React from 'react'

function Container({children}:Ichildren) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default Container