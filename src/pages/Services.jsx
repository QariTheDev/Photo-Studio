import React from 'react'
import ServicePic from '../assets/img/Figma/services.png'
import sandring from '../assets/img/Figma/shoot.jpg'
import serum from '../assets/img/Figma/image 29.jpg'
import Input from '../components/Input/Input'
import Footer from '../components/Footer/Footer'
import wedding from '../assets/img/Figma/wed shoot.jpg'
import laptop from '../assets/img/Figma/ad shoot.jpg'

export default function Services() {
    return (
        <>
            <section className="flex flex-col md:flex-row px-6 md:px-20 py-8 bg-darkGreen text-lightBrown items-center">
                <div className='flex-1 flex flex-col items-start justify-start space-y-3'>
                    <h1 className="text-5xl md:text-9xl">OUR <br /> SERVICES</h1>
                    <p className='font-times text-lg md:text-2xl'>
                        Lorem Ipsum es simplemente el <br />
                        texto de relleno de las imprentas <br />
                        y archivos de texto. Lorem Ipsum ha <br />
                        sido el texto de relleno
                    </p>
                </div>
                <div className='flex-1 flex items-center justify-center md:justify-end'>
                    <img src={ServicePic} alt="Services" className='w-full h-auto md:h-[70%]' />
                </div>
            </section>

            <section className="flex flex-col items-center justify-center bg-lightBrown py-8 px-6 md:px-20">
                <h1 className='font-noto text-2xl md:text-3xl'>What We Do</h1>
                <h1 className='font-times font-semibold text-3xl md:text-4xl py-4 border-b-2 border-b-black w-full text-center'>OUR SERVICES</h1>

                <div className='py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5'>
                    <div className='flex flex-col items-center justify-center space-y-3 md:-mt-36'>
                        <h1 className='font-semibold text-4xl md:text-6xl font-noto'>Product Shoot</h1>
                        <p className='text-lg md:text-2xl font-times md:-ml-12'>Lorem Ipsum es simplemente el <br />
                            texto de relleno de las imprentas <br />
                            y archivos de texto. Lorem Ipsum ha <br />
                            sido el texto de relleno</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center md:space-x-5'>
                        <div className='flex items-end justify-center md:justify-end'>
                            <div className='relative'>
                                <img src={sandring} alt="sandring" className='h-full w-[90%] pt-24' />
                                <div className="hidden md:block md:absolute md:top-32 md:-left-10">
                                    <div className="w-[21rem] h-80 border-8 border-black"></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='relative'>
                                <img src={serum} alt="serum" className='h-full w-[90%]' />
                                <div className="hidden md:block md:absolute md:top-10 md:-left-7">
                                    <div className="w-[21rem] h-80 border-8 border-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-start justify-start h-auto md:h-screen py-14 px-6 md:px-20 space-y-4 bg-cover bg-center" style={{
                backgroundImage: `url(${wedding})`
            }}>
                <h1 className="text-5xl md:text-7xl font-noto">Wedding Shoot</h1>
                <p className="text-xl md:text-3xl font-times">Lorem Ipsum es simplemente el <br />
                    texto de relleno de las imprentas <br />
                    y archivos de texto. Lorem Ipsum ha <br />
                    sido el texto de relleno
                </p>
            </section>

            <section className="bg-darkGreen text-lightBrown grid grid-cols-1 md:grid-cols-2 p-6 md:p-20">
                <div className="flex flex-col items-start justify-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-noto">Ads Shoot</h1>
                    <p className="text-lg md:text-2xl font-times">Lorem Ipsum es simplemente el <br />
                        texto de relleno de las imprentas <br />
                        y archivos de texto. Lorem Ipsum ha <br />
                        sido el texto de relleno</p>
                </div>
                <div className='bg-darkGreen flex items-center justify-center'>
                    <img src={laptop} alt="laptop" className="w-full h-auto" />
                </div>
            </section>

            <Input />

            <Footer />
        </>
    )
}