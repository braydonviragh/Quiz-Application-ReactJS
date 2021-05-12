import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <nav className=" flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 w-screen bg-gray-800 shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 inner">
            <NavLink exact to="/">
                <h1 className="text-2xl no-underline text-white hover:text-white font-bold">YOU THINK YOU CAN QUIZ?</h1>
                <h3 className=" text-white">App by Braydon Viragh</h3>
            </NavLink>
            </div>
        </nav>      
    </div>
    )
}

export default Navbar
