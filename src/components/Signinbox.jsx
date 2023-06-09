import React from "react"

const Signinbox = () => {
	return (
		<div className='flex flex-col gap-16 bg-featurelightblue basis-1/2 min-h-[50vh] rounded-[1.875rem] px-20 py-9 text-textblack'>
			<div className='flex flex-col gap-8'>
				<h2 className='text-secondaryorange text-2xl self-center font-medium'>Sign in</h2>
				<hr />
				<h2 className='text-primaryblue text-2xl font-medium'>Sign in to your account</h2>
				<div className='flex flex-col'>
					<label className='text-lg font-medium'>Email Id</label>
					<br />
					<input className='w-full px-6 py-3' placeholder='xxxxxxxxx' type='email' />
					<br />
					<label className='text-lg font-medium'>Password</label>
					<br />
					<input className='w-full px-6 py-3' placeholder='xxxxxxxxx' type='password' />
					<br />
					<p className='text-forgotred text-base font-medium'>Forgot Password</p>
				</div>
				<button className='bg-primaryblue text-white w-full text-2xl font-medium p-2'>Sign in</button>
				<p className='text-[#7A7A7A] text-base font-medium self-center'>
					New to vajra?<a className='ms-4 text-base font-medium text-secondaryorange'>Sign UP Now</a>
				</p>
			</div>
		</div>
	)
}

export default Signinbox
