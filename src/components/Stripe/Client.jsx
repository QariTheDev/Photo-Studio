import React from 'react'
import c1 from '../../assets/img/Figma/company 1.png'
import c2 from '../../assets/img/Figma/company 2.png'
import c3 from '../../assets/img/Figma/company 3.png'
import c4 from '../../assets/img/Figma/company 4.png'
import c5 from '../../assets/img/Figma/company 5.png'
import c6 from '../../assets/img/Figma/company 6.png'

export default function Client() {
    return (
        <>
            <section className='h-64 w-full flex flex-col space-y-12 bg-lightBrown items-center justify-center py-44'>
                <h1 className="text-5xl font-times font-semibold">Here are some of our clients</h1>

                <div className="flex space-x-10">
                    <img src={c1} alt="c" className='h-32 w-auto' />
                    <img src={c2} alt="c" className='h-32 w-auto' />
                    <img src={c3} alt="c" className='h-32 w-auto' />
                    <img src={c4} alt="c" className='h-32 w-auto' />
                    <img src={c5} alt="c" className='h-32 w-auto' />
                    <img src={c6} alt="c" className='h-32 w-auto' />
                </div>
            </section>
        </>
    )
}