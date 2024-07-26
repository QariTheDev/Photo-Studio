import React from 'react';
import weddingShoot from '../../assets/img/Figma/wedding shot 1.jpg';
import serum from '../../assets/img/Figma/product shoot 1.jpg';
import books from '../../assets/img/Figma/Ads shoot 1.jpg';

export default function Shoot() {
    return (
        <>
            <section className="grid grid-cols-3 h-64">
                <div className="relative flex items-stretch h-[80%]">
                    <img src={weddingShoot} alt="weddingShoots" className="h- w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                        <h1 className="text-5xl text-lightBrown font-semibold font-noto border-black stroke-black text-shadow">Wedding Shoot</h1>
                    </div>
                </div>
                <div className="relative flex items-stretch h-[80%]">
                    <img src={serum} alt="serum" className="h-full w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                        <h1 className="text-5xl text-lightBrown font-semibold font-noto border-black stroke-black text-shadow">Products Shoot</h1>
                    </div>
                </div>
                <div className="relative flex items-stretch h-[80%]">
                    <img src={books} alt="books" className="h-full w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                        <h1 className="text-5xl text-lightBrown font-semibold font-noto border-black stroke-black text-shadow">Ads Shoot</h1>
                    </div>
                </div>
            </section>

            <section className='mb-72'></section>
        </>
    );
}