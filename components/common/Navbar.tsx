"use client";
import { Navlinks } from "@/data/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import { images } from "@/data/Cdn"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4 overflow-hidden">
                <Link href="/" className="flex gap-2">
                    <div className="h-8 w-12 relative overflow-hidden hidden lg:block">
                        <Image
                            alt="Logo"
                            fill
                            src={images.navlogo}
                            className="object-contain object-center"
                        />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">Nexcent</h2>
                </Link>

                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    <div className="hidden lg:flex gap-x-2">
                        <button
                            type="button"
                            className="text-[#4CAF4F] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="mr-1 text-white bg-[#4CAF4F] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#4CAF4F] dark:hover:bg-[#4CAF4F] dark:focus:ring-blue-800"
                        >
                            Signup
                        </button>
                        <ModeToggle />
                    </div>

                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 lg:flex-nowrap md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
                        {Navlinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>
                                    <h1 className="block py-2 px-3 text-white bg-[#4CAF4F] rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white" aria-current="page">
                                        {link.title}
                                    </h1>
                                </Link>
                            </li>
                        ))}
                        <li className="lg:hidden">
                            <button
                                type="button"
                                className="text-[#4CAF4F]  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full text-left"
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                className="text-white bg-[#4CAF4F] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#4CAF4F] dark:hover:bg-[#4CAF4F] dark:focus:ring-blue-800 w-full"
                            >
                                Signup
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
