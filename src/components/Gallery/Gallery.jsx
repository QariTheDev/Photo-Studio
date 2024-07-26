import React from 'react';
import Chair from '../../assets/img/Figma/sofa image front page.jpg';
import makeup from '../../assets/img/Figma/brand phtography.jpg';
import cream from '../../assets/img/Figma/cream image.jpg';
import flowerBride from '../../assets/img/Figma/flower.jpg';
import product from '../../assets/img/Figma/product.jpg';
import brownSerum from '../../assets/img/Figma/Serum.jpg';
import camera from '../../assets/img/Figma/camera.jpg';
import serum2 from '../../assets/img/Figma/serum 2.jpg';
import consumer from '../../assets/img/Figma/image 21.jpg';

export default function Home() {

    return (<>
            <section className="flex flex-col items-center justify-center px-20 py-14 space-y-9">
                <h3 className="text-5xl font-semibold text-center">Premium Photography <br /> For Brands</h3>

                <div class="grid grid-cols-2 md:grid-cols-6 gap-4 h-[500px]">
                    <div class="grid gap-4 col-span-1 md:col-span-1">
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={makeup} alt="makeup" />
                        </div>
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={cream} alt="cream" />
                        </div>
                    </div>

                    <div class="grid gap-4 col-span-1 md:col-span-1">
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={flowerBride} alt="flowerBride" />
                        </div>
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={product} alt="product" />
                        </div>
                    </div>

                    <div class="grid gap-4 col-span-2 md:col-span-2">
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={brownSerum} alt="Serum" />
                        </div>
                    </div>

                    <div class="grid gap-4 col-span-1 md:col-span-1">
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={Chair} alt="chair" />
                        </div>
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={camera} alt="camera" />
                        </div>
                    </div>

                    <div class="grid gap-4 col-span-1 md:col-span-1">
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={serum2} alt="serum2" />
                        </div>
                        <div class="relative h-full">
                            <img class="object-cover h-full w-full rounded-lg" src={consumer} alt="consumer" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-36'></section>
    </>);
}
