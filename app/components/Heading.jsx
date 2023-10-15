import React from 'react' 
import { BiBell } from 'react-icons/bi';

const Heading = () => {
	return (
		<div className=" flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center ml-10 mr-8 mt-0 p-8 rounded-[20px] bg-white">
			<div>
				<input type="text" placeholder="Search any things..." className="w-[18rem] h-[2.5rem] p-3 rounded-[8px] border-[1px] border-[#0C0B4866] placeholder:text-xs md:placeholder:text-sm placeholder:text-[#0C0B4866] placeholder:font-semibold placeholder:bg-[url('/search.svg')] md:placeholder:w-[145px] placeholder:text-right md:placeholder:text-right placeholder:bg-left placeholder:bg-origin-content placeholder:bg-no-repeat"/>
			</div>
			<div className="flex justify-center items-center gap-2">
				<p className="text-[#808080] font-semibold text-base mr-2">Saturday, may 3, 2023</p>
				<p className="text-white font-semibold bg-red-400 rounded-full w-4 h-4 p-px text-sm flex justify-center items-center text-center -translate-y-2">3</p>
	            <p className="p-1 rounded-lg border-[1px] w-fit"><BiBell/></p>	
			</div>
		</div>
	)
}

export default Heading