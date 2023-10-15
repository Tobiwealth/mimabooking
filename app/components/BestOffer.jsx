import Image from 'next/image'
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';

const BestOffer = () => {
	return (
		<section className=" p-6">
			<div className="mb-3 pl-2">
				<h2 className="font-semibold text-base md:text-lg text-[#808080]">Best Offer</h2>
			</div>
			<div className="flex flex-col gap-6 lg:gap-0 md:grid md:grid-cols-3 lg:flex lg:flex-row justify-between items-center">
				<div className="w-[200px] flex flex-col justify-center items-center rounded-[20px] bg-white p-3 pb-5 gap-3 shadow-sm">
					<Image src='/bed.jpg' width={180} height={100} quality={100} alt="Picture of the user" className="aspect-video rounded-[12px]"/>
				    <div className="text-sm font-medium text-[#0C0B4866] flex flex-col justify-center gap-2 w-full">
				    	<h3 className="text-base font-bold text-[#152238]">7seasons Apartments</h3>
				    	<div className="flex items-center text-xs gap-1"><IoLocationOutline/><p>Kesington/London</p></div>
				    	<div className="flex justify-between items-center">
				    	    <p className="font-bold text-[#152238]">$65,000 <span className="text-[#0C0B4866] font-normal">/ night</span></p>
				    	    <span className="border-[1px] p-1 rounded-md"><AiOutlineHeart /></span>
				    	</div>
				    </div>
				</div>
				<div className="w-[200px] flex flex-col justify-center items-center rounded-[20px] bg-white p-3 pb-5 gap-3 shadow-sm">
					<Image src='/bedd.jpeg' width={180} height={100} quality={100} alt="Picture of the user" className="aspect-video rounded-[12px]"/>
				    <div className="text-sm font-medium text-[#0C0B4866] flex flex-col justify-center gap-2 w-full">
				    	<h3 className="text-base font-bold text-[#152238]">Along With The Villa</h3>
				    	<div className="flex items-center text-xs gap-1"><IoLocationOutline/><p>Hungry/Budapest</p></div>
				    	<div className="flex justify-between items-center">
				    	    <p className="font-bold text-[#152238]">$65,000 <span className="text-[#0C0B4866] font-normal">/ night</span></p>
				    	    <span className="border-[1px] p-1 rounded-md"><AiOutlineHeart /></span>
				    	</div>
				    </div>
				</div>
				<div className="w-[200px] flex flex-col justify-center items-center rounded-[20px] bg-white p-3 pb-5 gap-3 shadow-sm">
					<Image src='/beddd.webp' width={180} height={100} quality={100} alt="Picture of the user" className="aspect-video rounded-[12px]"/>
				    <div className="text-sm font-medium text-[#0C0B4866] flex flex-col justify-center gap-2 w-full">
				    	<h3 className="text-base font-bold text-[#152238]">Resort and Recreation</h3>
				    	<div className="flex items-center text-xs gap-1"><IoLocationOutline/><p>Williamstreet/Boxon</p></div>
				    	<div className="flex justify-between items-center">
				    	    <p className="font-bold text-[#152238]">$65,000 <span className="text-[#0C0B4866] font-normal">/ night</span></p>
				    	    <span className="border-[1px] p-1 rounded-md"><AiOutlineHeart /></span>
				    	</div>
				    </div>
				</div>
				<div className="w-[200px] flex flex-col justify-center items-center rounded-[20px] bg-white p-3 pb-5 gap-3 shadow-sm">
					<Image src='/bedgreen.jpg' width={180} height={100} quality={100} alt="Picture of the user" className="aspect-video rounded-[12px]"/>
				    <div className="text-sm font-medium text-[#0C0B4866] flex flex-col justify-center gap-2 w-full">
				    	<h3 className="text-base font-bold text-[#152238]">Beautiful and Classy</h3>
				    	<div className="flex items-center text-xs gap-1"><IoLocationOutline/><p>Citodines Opera Paris/France</p></div>
				    	<div className="flex justify-between items-center">
				    	    <p className="font-bold text-[#152238]">$65,000 <span className="text-[#0C0B4866] font-normal">/ night</span></p>
				    	    <span className="border-[1px] p-1 rounded-md"><AiOutlineHeart /></span>
				    	</div>
				    </div>
				</div>
				<div className="w-[200px] flex flex-col justify-center items-center rounded-[20px] bg-white p-3 pb-5 gap-3 shadow-sm">
					<Image src='/bedblack.jpg' width={180} height={100} quality={100} alt="Picture of the user" className="aspect-video rounded-[12px]"/>
				    <div className="text-sm font-medium text-[#0C0B4866] flex flex-col justify-center gap-2 w-full">
				    	<h3 className="text-base font-bold text-[#152238]">Permanent Peace</h3>
				    	<div className="flex items-center text-xs gap-1"><IoLocationOutline/><p>Sugar Apartments/Brazil</p></div>
				    	<div className="flex justify-between items-center">
				    	    <p className="font-bold text-[#152238]">$79,000 <span className="text-[#0C0B4866] font-normal">/ night</span></p>
				    	    <span className="border-[1px] p-1 rounded-md"><AiOutlineHeart /></span>
				    	</div>
				    </div>
				</div>
			</div>
		</section>
	)
}

export default BestOffer