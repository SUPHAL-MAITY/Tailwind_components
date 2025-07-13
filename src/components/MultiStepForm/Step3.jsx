

const Step3 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif flex flex-col items-center '>
      <h1>Academic Information</h1>

  <div className="flex flex-col my-4 bg-black  w-[300px]  h-[360px] p-4 rounded-lg shadow-lg">
          <label htmlFor="" className="text-white tracking-wide"  >School Name</label>
          <input type="text" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"   >Grade</label>
          <input type="date" className='border border-black rounded-lg my-2'  />
          <label className="text-white tracking-wide"    >Board</label>
          <select type="text" className='border border-black rounded-lg my-2' >
            <option value="" disabled>Choose One option</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
          </select>
        <div className="flex justify-center my-4">

          <button onClick={()=>prev()} className=" mx-4 bg-white px-4 rounded-sm"  >Prev</button>
          <button onClick={()=>next()} className=" mx-4 bg-white px-4 rounded-sm" disabled={stepNo===3}>Next</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Step3
