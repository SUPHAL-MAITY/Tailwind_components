

const Step1 = ({next,prev,stepNo}) => {
  return (
    <div className='font-serif flex flex-col items-center '>
      <h1>Job Location</h1>

      <div className="flex flex-col my-4 ">
        <input type="text" className='border border-black' />

        <div className="flex justify-center">
          <button onClick={()=>prev()} className="my-4 mx-4" disabled={stepNo===1} >Prev</button>
          <button onClick={()=>next()} className="">Next</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Step1
