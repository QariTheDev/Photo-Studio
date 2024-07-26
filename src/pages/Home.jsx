import React from 'react';
import ring from '../assets/img/Figma/ring image.jpg';
import flowers from '../assets/img/Figma/watercolour-flowers-4610095_1280 1.png';
import serumbg from '../assets/img/Figma/transparent-skin-oil-droppers-arrangement-with-skin-care-cream-recipient (1) 1.png';
import leaves from '../assets/img/Figma/Leaf shadow background.png';
import Chair from '../assets/img/Figma/sofa image front page.jpg';
import Photographer from '../assets/img/Figma/photographer-taking-photo-male-model-studio 1.jpg';
import Shoot from '../components/Cards/Shoot';
import adsImg from '../assets/img/Figma/ads image 1.jpg';
import adsImg2 from '../assets/img/Figma/Ads image 2.png';
import adsImg3 from '../assets/img/Figma/Ads image 3.jpg';
import Gallery from '../components/Gallery/Gallery';
import cameraWomen from '../assets/img/Figma/world best photographer.jpg';
import Input from '../components/Input/Input';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <div className="grid md:grid-cols-40-60 px-4 md:px-20 py-8 bg-darkGreen text-lightBrown">
                <div className='flex flex-col items-start justify-start space-y-3'>
                    <h1 className="text-4xl md:text-9xl">PHOTO <br /> STUDIO</h1>
                    <p className='font-times text-lg md:text-2xl'>
                        Lorem Ipsum es simplemente el <br />
                        texto de relleno de las imprentas <br />
                        y archivos de texto. Lorem Ipsum ha <br />
                        sido el texto de relleno
                    </p>
                </div>
                <div className='grid grid-cols-2 grid-rows-2'>
                    <div className="p-2"></div>
                    <div className="p-2 h-[90%] w-[90%]">
                        <img src={Photographer} alt="Photographer" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-2 h-[90%] w-[90%]">
                        <img src={Chair} alt="Chair" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-2 flex items-end h-[85%] w-[85%]">
                        <h4 className='text-lg md:text-2xl'>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                        </h4>
                    </div>
                </div>
            </div>

            <Shoot />

            <section className="relative grid md:grid-cols-2 px-4 md:px-20 py-14 bg-lightBrown">
                <div className="flex flex-col items-start justify-start">
                    <img src={leaves} alt="leaves Bg" className='z-0 absolute top-0 left-0 h-auto w-[55%]' />
                    <h1 className="text-4xl md:text-7xl font-jetbrains">PRODUCT <br /> SHOOT</h1>
                    <p className='text-lg md:text-xl font-times'>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={leaves} alt="leaves Bg" className='z-0 absolute bottom-0 right-0 rotate-180 h-auto w-[35%]' />
                    <img src={serumbg} alt="serum Bg" className='flex items-center justify-center' />
                </div>
            </section>

            <section className='grid md:grid-cols-40-60 bg-darkGreen h-auto md:h-130 overflow-hidden'>
                <div className='relative'>
                    <img src={ring} alt="ring" className="object-cover w-full h-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className='pt-24 pl-4 md:pl-24 text-lightBrown space-y-3'>
                        <h1 className='text-4xl md:text-7xl font-jetbrains'>WEDDING <br /> SHOOT</h1>
                        <p className='text-lg md:text-2xl font-times'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>
                    </div>
                    <div className='flex'>
                        <img src={flowers} alt="flowers" className="object-cover w-full h-full" />
                    </div>
                </div>
            </section>

            <section className='grid md:grid-cols-40-60 px-4 md:px-20 py-14 bg-lightBrown h-auto md:h-130 overflow-hidden space-x-0 md:space-x-14'>
                <div className="flex flex-col items-start justify-start space-y-5">
                    <h1 className="text-4xl md:text-7xl font-jetbrains">ADS <br /> SHOOT</h1>
                    <p className='text-lg md:text-2xl font-times text-shadow'>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                    </p>
                </div>
                <div className='relative'>
                    <img src={adsImg} alt="ads" className='text-shadow absolute h-full w-auto' />
                    <img src={adsImg3} alt="ads" className='text-shadow absolute h-[60%] w-auto right-10' />
                    <img src={adsImg2} alt="ads" className='text-shadow absolute h-[40%] w-auto bottom-14 left-44' />
                </div>
            </section>

            <Gallery />

            <section className='grid md:grid-cols-60-40 bg-darkGreen text-lightBrown'>
                <div className='flex flex-col space-y-7 p-10 md:p-40'>
                    <h1 className="text-4xl md:text-6xl font-noto font-semibold">Trusted By The <br />
                        World’s Best <br />
                        Photographers</h1>
                    <p className='text-lg md:text-2xl font-noto'>Whether you shoot landscapes, people,
                        architecture, or weddings, get inspired
                        by our collection of photography</p>
                </div>
                <div><img src={cameraWomen} alt="cameraWomen" className="object-cover w-full h-full" /></div>
            </section>

            <Input />
        
            <Footer />
        </>
    );
}