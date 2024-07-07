"use client";
import { Navlinks } from "@/data/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex gap-2">
                    <div className="h-8 w-12 relative overflow-hidden  ">
                        <Image
                            alt="Logo"
                            fill
                            src="/logo.png"
                            className="object-contain object-center"
                        />
                    </div>
                    <h2 className=" text-3xl  font-extrabold text-gray-800 dark:text-white ">Nexcent</h2>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="gap-x-20">
                        <button
                            type="button"
                            className="text-[#4CAF4F] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="mr-1 text-white bg-[#4CAF4F] hover:bg-[#29932c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#4CAF4F] dark:hover:bg-[#4CAF4F] dark:focus:ring-blue-800"
                        >
                            Signup
                        </button>
                        <ModeToggle />

                    </div>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {Navlinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>
                                    <h1 className="block py-2 px-3 text-white bg-[#4CAF4F] rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white" aria-current="page">
                                        {link.title}
                                    </h1>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
