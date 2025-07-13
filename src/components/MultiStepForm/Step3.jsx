import React from 'react'

const Step3 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif'>
      <h1>Personal Details</h1>

       <div className="flex flex-col">
        <input type="text" className='border border-black' />
          <div className="flex">
           <button onClick={()=>prev()} className="">Prev</button>
           <button onClick={()=>next()} className="" disabled={stepNo===3}>Next</button>
        </div>
      </div>
      
    </div>
  )
}

export default Step3
