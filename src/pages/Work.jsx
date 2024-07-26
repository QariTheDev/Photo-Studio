import React from 'react'
import work from '../assets/img/Figma/our work.jpg'
import Client from '../components/Stripe/Client'
import Footer from '../components/Footer/Footer'
import team from '../assets/img/Figma/team.jpg'
import team2 from '../assets/img/Figma/our team.jpg'

export default function Work() {
    const boxes = [
        {
            headline: 'Sample Headline',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        },
        {
            headline: 'Sample Headline',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        },
        {
            headline: 'Sample Headline',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        }
    ]

    return (
        <>
            <section className="grid md:grid-cols-40-60 px-6 md:px-20 bg-darkGreen text-lightBrown h-screen">
                <div className='flex flex-col items-start justify-start space-y-3'>
                    <h1 className="text-4xl md:text-9xl">OUR <br /> WORK</h1>
                    <p className='font-times text-base md:text-2xl'>
                        Lorem Ipsum es simplemente el <br className="hidden md:block" />
                        texto de relleno de las imprentas <br className="hidden md:block" />
                        y archivos de texto. Lorem Ipsum ha <br className="hidden md:block" />
                        sido el texto de relleno
                    </p>
                </div>
                <div className='relative pt-10 md:pt-36 pr-0 md:pr-12'>
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
                        <div className=""></div>
                        <div className="relative">
                            <div className="absolute inset-0 -left-0 md:-left-20 -top-8 md:-top-16 bottom-5 md:bottom-10 right-5 md:right-10 rounded-3xl bg-lightBrown z-0"></div>
                            <img src={work} alt="work" className='rounded-3xl h-full w-auto relative z-10' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-lightBrown flex flex-col items-center justify-center space-y-12 py-14 px-6 md:px-20">
                <h1 className="text-3xl md:text-5xl font-semibold font-times">How We Work</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {boxes.map((box, index) =>
                        <div key={index} className="flex flex-col items-start justify-start bg-white shadow-xl rounded-3xl px-10 pt-10 pb-20">
                            <h1 className="text-xl md:text-4xl p-6 rounded-full bg-lightBrown w-12 md:w-16 h-12 md:h-16 flex items-center justify-center font-times font-semibold">{index + 1}</h1>
                            <div className="flex flex-col space-y-5">
                                <h1 className="font-times text-2xl md:text-3xl font-semibold">{box.headline}</h1>
                                <p className="text-lg md:text-2xl">{box.text}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 py-14'>
                <div className='flex flex-col items-center justify-center space-y-12'>
                    <img src={team} alt="team" className='rounded-3xl w-[70%] h-auto' />

                    <div className="flex flex-col items-center justify-center px-6 md:px-32 space-y-4">
                        <h1 className="text-3xl md:text-6xl font-semibold font-times text-center md:text-left">We guarantee Our team happier and more connected</h1>
                        <p className="text-lg md:text-2xl font-noto text-center md:text-left">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center space-y-10 md:space-y-28 px-6 md:pr-20'>
                    <h1 className="text-lg md:text-3xl font-noto text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </h1>
                    <div className='relative'>
                        <img src={team2} alt="team" className='w-[75%] h-auto z-10' />
                        <div className="absolute inset-0 left-10 md:left-36 -top-20 md:-top-40 -bottom-6 md:-bottom-12 right-5 md:right-20 rounded-3xl bg-lightBrown -z-10"></div>
                    </div>
                </div>
            </section>

            <Client />

            <Footer />
        </>
    )
}
