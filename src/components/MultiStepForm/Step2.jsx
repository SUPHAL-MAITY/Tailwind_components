

const Step2 = ({next,prev,stepNo}) => {
  return (
     <div className='font-serif flex flex-col items-center '>
      <h1>Contact Details</h1>

      <div className="flex flex-col my-4 bg-black  w-[300px]  h-[360px] p-4 rounded-lg shadow-lg">
          <label htmlFor="" className="text-white tracking-wide"  >Address</label>
          <input type="text" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"   >Phone Number</label>
          <input type="tel" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"    >Email</label>
          <input type="email" className='border border-black rounded-lg my-2' />
          <div className="flex justify-center my-4">

          <button onClick={()=>prev()} className=" mx-4 bg-white px-4 rounded-sm" disabled={stepNo===1} >Prev</button>
          <button onClick={()=>next()} className=" mx-4 bg-white px-4 rounded-sm">Next</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Step2
