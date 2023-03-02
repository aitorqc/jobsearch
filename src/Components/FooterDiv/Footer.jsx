import React from 'react'

export default function Footer() {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
        <div>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] test-white pb-[1.5rem]'><strong>Job</strong>Search</h1>
            </div>
            <p>
                We always make our seekers and companies find the best jobs and employers find the bes candidates.
            </p>
        </div>

        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                Company
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>About Us</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Features</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>News</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>FAQ</li>
            </div>
        </div>
        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                Resources
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Account</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Support Center</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Feedback</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Contact Us</li>
            </div>
        </div>
        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                Resources
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Events</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Promo</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Req Demo</li>
                <li className='text-white opacity-[0.7] hover:opacity-[1]'>Careers</li>
            </div>
        </div>

        <div>
            <div className='logoDiv'>
                <h2 className='logo text-[25px] test-white pb-[1.5rem]'>Contact Info</h2>
            </div>
            <p>
                contact@jobsearch.com
            </p>
        </div>
    </div>
  )
}
