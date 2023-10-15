"use client"
import React, {useState} from 'react';
import Image from 'next/image'
import { TbEdit, TbHome, TbLayoutGrid } from 'react-icons/tb';
import { PiEnvelopeSimpleOpenBold, PiGearSixThin } from 'react-icons/pi';
import { AiOutlineHeart, AiOutlineMenu,  } from 'react-icons/ai';
import { FaTimes  } from 'react-icons/fa';
import { BiSolidHomeCircle } from 'react-icons/bi';
import { LiaChevronCircleRightSolid } from 'react-icons/lia';

const Sidebar = () => {
	const [closeMobile, setCloseMobile] = useState(false);

	return (
		<section className="h-full bg-white w-[14rem] lg:w-[16rem] rounded-r-[30px] p-8  ">
		    {closeMobile ? <FaTimes className="md:hidden absolute top-2 right-8" onClick={() => setCloseMobile(false)}/> : <AiOutlineMenu className="md:hidden absolute top-2 right-8" onClick={() => setCloseMobile(true)}/> }
			<div className="hidden md:flex flex-col justify-between h-screen bg-white pb-16">
				<div className="flex flex-col justify-center items-center gap-4">
					<h3 className="text-[#152238] text-lg md:text-xl font-bold ">Mima<span className="text-[#808080]">Booking</span></h3>
					<div className="border-[1px] border-[#808080] rounded-[100px] w-[100px] h-[100px] p-1 flex justify-center items-center relative">
					    <Image src='/profile.jpg' width={100} height={100} quality={100} alt="Picture of the user" className="rounded-[100px]"/>
					    <p className="bg-[#152238] p-[3px] rounded-full absolute -bottom-2 "><TbEdit className="text-base text-white"/></p>
					</div>
					<p className="text-base text-[#0C0B4866] font-medium">ilia jan</p>
				</div>
				<ul className="flex flex-col gap-6 text-base md:text-lg text-[#808080] font-semibold mt-6">
					<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] bg-[#152238] rounded-full"></button><BiSolidHomeCircle className="text-[#152238]"/> Dashboard</li>
					<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><TbLayoutGrid/> Explore City</li>
					<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><PiEnvelopeSimpleOpenBold/> Ticket</li>
					<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><AiOutlineHeart/> Favorites</li>
					<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><PiGearSixThin/> Setting</li>
				</ul>
				<div>
					<p className="flex items-center gap-3 text-base md:text-lg text-[#808080] font-semibold"><button className="w-[5px] h-[5px] rounded-full"></button><LiaChevronCircleRightSolid/> Logout</p>
				</div>
			</div>
			{ closeMobile && 
			    <div className={`flex absolute top-0 z-50 md:hidden flex-col justify-between h-screen p-8 rounded-r-[20px] bg-white`}>
					<div className="flex flex-col justify-center items-center gap-4">
						<h3 className="text-[#152238] text-lg md:text-xl font-bold ">Mima<span className="text-[#808080]">Booking</span></h3>
						<div className="border-[1px] border-[#808080] rounded-[100px] w-[100px] h-[100px] p-1 flex justify-center items-center relative">
						    <Image src='/profile.jpg' width={100} height={100} quality={100} alt="Picture of the user" className="rounded-[100px]"/>
						    <p className="bg-[#152238] p-[3px] rounded-full absolute -bottom-2 "><TbEdit className="text-base text-white"/></p>
						</div>
						<p className="text-base text-[#0C0B4866] font-medium">ilia jan</p>
					</div>
					<ul className="flex flex-col gap-6 text-base md:text-lg text-[#808080] font-semibold mt-6">
						<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] bg-[#152238] rounded-full"></button><BiSolidHomeCircle className="text-[#152238]"/> Dashboard</li>
						<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><TbLayoutGrid/> Explore City</li>
						<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><PiEnvelopeSimpleOpenBold/> Ticket</li>
						<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><AiOutlineHeart/> Favorites</li>
						<li className="flex items-center gap-3"><button className="w-[5px] h-[5px] rounded-full"></button><PiGearSixThin/> Setting</li>
					</ul>
					<div>
						<p className="flex items-center gap-3 text-base md:text-lg text-[#808080] font-semibold"><button className="w-[5px] h-[5px] rounded-full"></button><LiaChevronCircleRightSolid/> Logout</p>
					</div>
			    </div>
		    }
		</section>
	)
}

export default Sidebar