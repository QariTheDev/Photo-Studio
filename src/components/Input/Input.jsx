import React from 'react'

export default function Input() {
    return (
        <>
            <section className='h-72 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-lightBrown from-white space-y-7 flex flex-col items-center justify-center'>
                <div className="flex flex-col items-center justify-center font-noto space-y-2">
                    <h1 className="text-4xl md:text-5xl font-noto font-semibold text-center">Best Photography Website</h1>
                    <p className='text-lg md:text-2xl text-center'>
                        Join our email list and be the first one to know about the latest updates.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                    <input
                        type="text"
                        placeholder="Type your email address here"
                        className="p-4 border-black rounded-l-3xl w-full md:w-[30rem] max-w-md"
                    />
                    <button className="p-4 bg-black text-lightBrown rounded-r-3xl">Send</button>
                </div>
            </section>
        </>
    )
}