import React from "react"
import GoogleIcon from "/PlayStore.png"
import AppStore from "/AppStore.png"
const Download = () => {
	return (
		<div className='flex w-screen h-fit justify-center gap-12 mt-20 mb-40'>
			<p className='text-2xl font-medium text-primaryblue'>Download Our App</p>
			<img src={GoogleIcon} alt='Google play store download Vajra' />
			<img src={AppStore} alt='Apple store download Vajra' />
		</div>
	)
}

export default Download
