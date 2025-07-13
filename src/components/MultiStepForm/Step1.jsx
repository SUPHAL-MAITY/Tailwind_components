import React from 'react'

const Step1 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif'>
      <h1>Job Location</h1>

      <div className="flex flex-col">
        <input type="text" className='border border-black' />

        <div className="flex">
          <button onClick={()=>prev()} className="" disabled={stepNo===1} >Prev</button>
          <button onClick={()=>next()} className="">Next</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Step1
