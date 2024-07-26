import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR WORK', path: '/work' },
    { name: 'BOOK NOW', path: '/book' }
];

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-col md:flex-row px-4 md:px-20 items-center justify-between bg-darkGreen text-lightBrown py-4 md:py-8">
                <ul className="flex flex-col md:flex-row items-center justify-center font-jetbrains text-lg md:text-2xl space-y-2 md:space-y-0 md:space-x-10">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} className="hover:text-white cursor-pointer">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <h3 className='text-lg md:text-2xl mt-4 md:mt-0'>YOUR LOGO</h3>
            </nav>
        </>
    );
}