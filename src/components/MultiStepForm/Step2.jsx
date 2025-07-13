import React from 'react'

const Step2 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif'>
      <h1>Job Position</h1>

       <div className="flex flex-col">
        <input type="text" className='border border-black' />
          <div className="flex">
           <button onClick={()=>prev()} className="">Prev</button>
           <button onClick={()=>next()} className="">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Step2
