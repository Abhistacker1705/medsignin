import React from "react"
import VajraLogo from "/VajraLogo.svg"

const Footer = () => {
	return (
		<footer className='flex bg-featurelightblue justify-between px-16 py-6 w-full'>
			<div className='flex items-center gap-16'>
				<img src={VajraLogo} alt='Vajra Footer' />
				<p className='text-textblack text-lg'>© 2020 VAJRA, All Rights Reserved</p>
			</div>
			<div className='flex items-center gap-1 text-black text-lg'>
				<a>Terms & Conditions</a>
				<a>|</a>
				<a>FAQ's</a>
			</div>
		</footer>
	)
}

export default Footer
