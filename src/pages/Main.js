import Tooltip from "../components/Tooltip"


export const Main=()=>{
    return(
        <div className="main-container flex flex-col gap-4 pt-6 items-center h-[100vh] w-[100%] bg-blue-200">
            <h2 className="px-2 py-4 flex justify-center items-center font-extrabold text-xl underline mb-12">Welcome to The ToolTip App</h2>
            <Tooltip position="top"/>
            <Tooltip position="bottom"/>
            <Tooltip position="left"/>
            <Tooltip position="right"/>
        </div>
    )
}