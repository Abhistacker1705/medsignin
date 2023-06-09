import React from "react"
import DigitizeLogo from "/DigitizeLogo.svg"
import TrackLogo from "/TrackLogo.png"
import BioLogo from "/BioLogo.png"
const Featurebox = () => {
	return (
		<div className='flex flex-col gap-16 bg-primaryblue basis-1/2 min-h-fit rounded-[1.875rem] px-20 py-9 text-featurelightblue shadow-other'>
			<h2 className='text-[2.75rem] font-bold self-center'>Features</h2>
			<div className='flex items-start'>
				<img className='me-9' src={DigitizeLogo} alt='Digitization done by Vajra' />
				<div className='flex flex-col gap-3'>
					<h3 className='font-semibold text-3xl'>Digitize</h3>
					<p className='text-xl'>A Bird eye view of the entire Biomedical Operations.</p>
				</div>
			</div>
			<div className='flex items-start'>
				<img className='me-9' src={TrackLogo} alt='Tracking done by Vajra' />
				<div className='flex flex-col gap-3'>
					<h3 className='font-semibold text-3xl'>Track</h3>
					<p className='text-xl'>Track the product life cycle and service history.</p>
				</div>
			</div>
			<div className='flex items-start'>
				<img className='me-9' src={BioLogo} alt='Biomedical Budget calculation done by Vajra' />
				<div className='flex flex-col gap-3'>
					<h3 className='font-semibold text-3xl'>Biomedical Budget</h3>
					<p className='text-xl'>Regulate and save budget through analysed data and informed</p>
				</div>
			</div>
		</div>
	)
}

export default Featurebox
