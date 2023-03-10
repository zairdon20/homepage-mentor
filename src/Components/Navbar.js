// import { FaBeer } from 'react-icons/fa';

import React from "react";

function Navbar() {
    return (
       
       <main>
        <div>
            <ul className="absolute right-4 gap-6">
                <li className="pt-6">Home</li>
                <li className="pt-4">New</li>
                <li className="pt-4">Trending</li>
                <li className="pt-4">Popular</li>
                <li className="pt-4">Categories</li>
            </ul>
        </div>
       </main>
    )
}


export default Navbar;