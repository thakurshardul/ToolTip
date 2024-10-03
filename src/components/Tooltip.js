import React,{useState} from 'react'

function Tooltip({position}) {
    const [isTooltipVisible,setIsTooltipVisible]=useState(false);
    console.log(position)
    return (
        <div className="inline-block mb-12 border-2 border-black relative bg-red-300 px-6 py-2 rounded-xl hover:bg-green-300" onMouseEnter={()=>setIsTooltipVisible(true)} onMouseLeave={()=>setIsTooltipVisible(false)}>
            Hover over me for {position} tooltip
            <span className={`text-center py-1 absolute z-10 ${position}-[-100%] w-full ${isTooltipVisible?"inline-block border-b-2 border-red-300 rounded-b-xl":"hidden"}`}>{position} Tooltip text</span>
        </div>
    )
}

export default Tooltip
