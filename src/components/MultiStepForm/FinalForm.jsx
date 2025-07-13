import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const FinalForm = () => {

    const [stepNo,setStepNo]=useState(1)

    const next=()=>{setStepNo(prev=>prev+1)}
    const prev=()=>{setStepNo(prev=>prev-1)}
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <h1 className='text-3xl font-serif'> Form submission</h1>
        <div className="my-4 font-serif">  
          <span  className={`mx-2  ${stepNo==1 ? "text-blue-600":""}`} > Job Location</span> <span className={`mx-2  ${stepNo==2 ? "text-blue-600":""}`}>Job Position</span><span className={`mx-2  ${stepNo==3 ? "text-blue-600":""}`}>Personal Details</span>
        </div>
        {stepNo}

        {stepNo===1 &&  <Step1  next={next} prev={prev} stepNo={stepNo}/>}
        {stepNo==2  &&  <Step2  next={next} prev={prev} stepNo={stepNo}/>}
        {stepNo===3 &&  <Step3  next={next} prev={prev} stepNo={stepNo}/>}
      
    </div>
  )
}

export default FinalForm
