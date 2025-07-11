import React, { useState } from 'react'

const FinalForm = () => {

    const [stepNo,setStepNo]=useState(1)

    const next=()=>{prev=>setStepNo(prev+1)}

    const back=()=>{prev=>setStepNo(prev-1)}

  return (
    <div className='flex justify-center p-4'>
        <h1 className='text-3xl font-serif'> Form submission</h1>
      
    </div>
  )
}

export default FinalForm
