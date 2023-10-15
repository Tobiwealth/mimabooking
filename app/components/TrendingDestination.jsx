import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';


const TrendingDestination = () => {
	return (
		<section className="mt-6 p-6">
			<div className="mb-8">
				<h2 className="font-semibold text-base md:text-lg text-[#808080]">Trending destinations</h2>
			</div>
			<div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/france.jpg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<div className="text-base font-bold text-[#152238] flex justify-start items-center gap-6">
				    	    <h3>Montmarte, France</h3>
				    	    <span className="text-xs font-normal flex justify-center items-center gap-1"><FaStar className="text-yellow-300"/> 4/5</span>
				    	</div>
				    	<p>Visiting the best tourist areas chosen by the audience</p>
				    	<p className="font-bold text-[#152238]">$450,000,00</p>
				    </div>
				</div>
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/turkey.jpeg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<div className="text-base font-bold text-[#152238] flex justify-start items-center gap-6">
				    	    <h3>Istanbul, Turkey</h3>
				    	    <span className="text-xs font-normal flex justify-center items-center gap-1"><FaStar className="text-yellow-300"/> 5/5</span>
				    	</div>
				    	<p>One of our best-selling tours to Turkey and visiting its regions...</p>
				    	<p className="font-bold text-[#152238]">$600,000,00</p>
				    </div>
				</div>
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/london.jpg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<div className="text-base font-bold text-[#152238] flex justify-start items-center gap-6">
				    	    <h3>London, UK</h3>
				    	    <span className="text-xs font-normal flex justify-center items-center gap-1"><FaStar className="text-yellow-300"/> 4/5</span>
				    	</div>
				    	<p>London is one of the most beautiful places to visit that...</p>
				    	<p className="font-bold text-[#152238]">$360,000,00</p>
				    </div>
				</div>
			</div>
			<div className="flex justify-between items-center mt-6">
				<div></div>
				<div className="flex items-center gap-2">
					<button className="w-2 h-2 rounded-full bg-[#ECECEC]"></button>
					<button className="w-2 h-2 rounded-full bg-[#152238]"></button>
					<button className="w-2 h-2 rounded-full bg-[#ECECEC]"></button>
				</div>
				<div>
					<p className="text-[#808080] font-semibold text-sm">View All</p>
				</div>
			</div>
		</section>
	)
}

export default TrendingDestination