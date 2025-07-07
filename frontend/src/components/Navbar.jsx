import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed bg-stone-300 w-full shadow-md z-50 p-1">
            <nav className="mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold">Store</div>
                <ul className="hidden md:flex space-x-6">
                    <li className="hover:text-gray-700 cursor-pointer">Home</li>
                    <li className="hover:text-gray-700 cursor-pointer">Products</li>
                    <li className="hover:text-gray-700 cursor-pointer">About</li>
                    <li className="hover:text-gray-700 cursor-pointer">Contact</li>
                </ul>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                    />
                </button>

                {/* Mobile Links Panel */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-stone-300 shadow-md md:hidden">
                        <ul className="flex flex-col p-4 space-y-2">
                            {['Home', 'Products', 'About', 'Contact'].map((link) => (
                                <li
                                    key={link}
                                    className="p-2 rounded hover:bg-stone-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;