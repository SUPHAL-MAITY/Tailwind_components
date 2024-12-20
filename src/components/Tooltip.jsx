import React,{useState} from 'react'

const Tooltip = () => {
    const [isToolTipOpen,setIsToolTipOpen]=useState(false)




    const handleMouseEnter=()=>{
        console.log("mouse entered")
        setIsToolTipOpen(true)
        
    }
    const handleMouseLeave=()=>{
        setIsToolTipOpen(false)
    }



  return (




    <> 

        <div className='flex flex-col justify-center items-center '>
            <button   onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}  type="button" className="my-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

            <div id="tooltip-default" role="tooltip" className={`absolute top-0  ${isToolTipOpen?"":"hidden"}   z-10  inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm   dark:bg-gray-700`}>
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>



        </div>
         

      
    </>
  )
}

export default Tooltip
