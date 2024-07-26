import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import fb from '../../assets/img/Figma/icon svg/fb Vector.svg';
import gmail from '../../assets/img/Figma/icon svg/gmail vector.svg';
import insta from '../../assets/img/Figma/icon svg/insta Vector.svg';
import linkedin from '../../assets/img/Figma/icon svg/linkedn Vector.svg';

export default function Footer() {
    return (
        <>
            <footer className='flex flex-col bg-darkGreen text-lightBrown pt-6'>
                <h1 className='border-b-lightBrown border-b-2 text-2xl font-bold px-4 md:px-32 font-noto pb-3'>YOUR LOGO</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-32 pt-8 md:pt-16 pb-16 md:pb-28 border-b-lightBrown border-b-2 gap-8 md:gap-16'>
                    <div className="flex flex-col items-start justify-center space-y-3 text-lg md:text-2xl">
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>OUR WORK</li>
                        <li>BOOK NOW</li>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-8 text-lg md:text-2xl font-noto">
                        <div className='flex flex-col items-start space-y-3'>
                            <h1 className="text-lg md:text-2xl font-semibold font-noto">Get in Touch</h1>
                            <p className='text-base md:text-xl'>Our Friendly Team is here to help</p>
                            <p><a href="mailto:hi@ourcompany.com" className='underline'>hi@ourcompany.com</a></p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className="flex space-x-2 items-center">
                                <FaLocationDot className="text-2xl md:text-4xl" />
                                <h1 className="text-lg md:text-2xl font-semibold font-noto">Office</h1>
                            </div>
                            <p className='text-base md:text-xl'>Come Say hello at our office <br />121 Rock Street,21 Avenue.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-3 text-lg md:text-2xl font-noto">
                        <li>PRODUCT SHOOT</li>
                        <li>ADS SHOOT</li>
                        <li>WEDDING SHOOT</li>
                    </div>
                </div>
                <div className='flex items-center justify-center md:justify-end px-4 md:px-20 space-x-4 md:space-x-5 py-4'>
                    <img src={gmail} alt="gmail" className='w-8' />
                    <img src={fb} alt="fb" className='w-8' />
                    <img src={insta} alt="insta" className='w-8' />
                    <img src={linkedin} alt="linkedin" className='w-8' />
                </div>
            </footer>
        </>
    )
}
