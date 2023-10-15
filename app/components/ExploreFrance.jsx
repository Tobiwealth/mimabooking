import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

const ExploreFrance = () => {
	return (
		<section className="mt-6 p-6">
			<div className="mb-8">
				<h2 className="font-semibold text-base md:text-lg text-[#808080]">Explore France</h2>
			</div>
			<div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/eiffel.jpeg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<h3 className="text-sm font-bold text-[#152238]">Eiffel Tower,Paris,France</h3>
				    	<p>Visiting the best tourist areas chosen by the audience</p>
				    	<p className="font-bold text-[#152238]">$450,000,00</p>
				    </div>
				</div>
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/arc.jpeg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<h3 className="text-sm font-bold text-[#152238]">L'Arc de Triomphe de l'Etoile</h3>
				    	<p>One of our best-selling tours to Turkey and visiting its regions...</p>
				    	<p className="font-bold text-[#152238]">$600,000,00</p>
				    </div>
				</div>
				<div className="flex justify-between items-center w-[24rem] gap-4 p-4 rounded-[20px] bg-white shadow-sm">
					<Image src='/franceparis.jpg' width={100} height={50} quality={100} alt="Picture of the user" className="aspect-square rounded-[12px]"/>
				    <div className="text-xs font-medium text-[#0C0B4866] flex flex-col justify-center gap-2">
				    	<h3 className="text-base font-bold text-[#152238]">Paris, France</h3>
				    	<p>London is one of the most beautiful places to visit that...</p>
				    	<p className="font-bold text-[#152238]">$360,000,00</p>
				    </div>
				</div>
			</div>
		</section>
	)
}

export default ExploreFrance