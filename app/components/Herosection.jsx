import Image from 'next/image'
import { IoLocationOutline, IoPersonOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
import { PiSealCheck } from 'react-icons/pi';

const Herosection = () => {
	return (
		<section className="w-full p-8 flex flex-col items-center relative">
			<div className="w-full h-[200px] lg:h-[300px]">
				<Image 
				    src='/furniture.jpg'
				    height={300}
				    width={1200}
				    //sizes="(max-width: 768px) 100vw, 100%"
				    //fill={true}
				    quality={100} alt="Picture of the furniture" 
				    className="rounded-[50px] aspect-[16/8] md:aspect-[16/4] w-full"
				/>
			</div>
			<div className="grid grid-cols-2 lg:flex justify-between gap-8 items-center text-[#0C0B4866] font-semibold text-xs lg:text-base p-3 lg:pl-8 lg:pr-8 lg:ml-16 lg:mr-16 rounded-[20px] bg-white absolute bottom-6 lg:-bottom-6 ">
				<div className="flex justify-between items-center lg:gap-12 lg:mr-auto lg:border-r-[2px] lg:pr-8">
					<span className="flex gap-2 items-center"><IoLocationOutline/> Where Are You Going?</span> <FiChevronDown className=""/>
				</div>
				<div className="flex justify-between items-center lg:gap-12  mr-auto ml-auto ">
					<span className="flex gap-2 items-center"><PiSealCheck/> Check-in Date</span> <FiChevronDown className=""/>
				</div>
				<div className="flex justify-between items-center lg:gap-12 text-[#152238] lg:border-l-[2px] ml-auto mr-auto lg:pl-8">
					<span className="flex gap-2 items-center"><IoPersonOutline/> 3 adults</span> <FiChevronDown className=""/>
				</div>
				<button className="bg-[#152238] text-white font-medium text-base w-[7rem] h-[3rem] rounded-[12px] ml-auto">Search</button>
			</div>
		</section>
	)
}

export default Herosection;