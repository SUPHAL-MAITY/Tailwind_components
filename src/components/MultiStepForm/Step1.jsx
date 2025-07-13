

const Step1 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif flex flex-col items-center '>
      <h1>Personal Information</h1>

      <div className="flex flex-col my-4 bg-black  w-[300px]  h-[360px] p-4 rounded-lg shadow-lg">
          <label htmlFor="" className="text-white tracking-wide"  >Full Name</label>
          <input type="text" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"   >Date of Birth</label>
          <input type="date" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"    >Gender</label>
          <input type="text" className='border border-black rounded-lg my-2' />
        <div className="flex justify-center my-4">

          <button onClick={()=>prev()} className=" mx-4 bg-white  rounded-sm px-4" disabled={stepNo===1} >Prev</button>
          <button onClick={()=>next()} className=" mx-4 bg-white  rounded-sm px-4">Next</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Step1
