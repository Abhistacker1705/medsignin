import React from "react"
import VajraLogo from "/VajraLogo.svg"

const Navbar = () => {
	return (
		<nav className='flex w-screen h-fit justify-end items-center py-6 px-16 bg-featurelightblue mb-9 shadow-nav'>
			<div className='drop flex basis-[45%] justify-self-center items-center'>
				<img className='me-20' src={VajraLogo} alt='Vajra for Biomedical operations tracking' />
				<a className='text-primaryblue font-medium text-lg'>HOME</a>
			</div>
			<p className='text-primaryblue font-medium text-lg'>+91 89715 80265</p>
		</nav>
	)
}

export default Navbar
