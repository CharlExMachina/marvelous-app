import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useWindowsSize from '../hooks/useWindowsSize';

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const windowSize = useWindowsSize();

    useEffect(() => {
        if (windowSize.width >= 1024) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }, [windowSize]);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-marvelRed p-1 z-50 top-0 fixed w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-4">
                <Link to="/" className="text-4xl tracking-tight font-comic">Marvelous</Link>
            </div>
            <div className="block lg:hidden">
                <button 
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    onClick={handleMenuClick}
                    >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {
                showMenu &&
                <div className="w-full p-3 block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    </div>
                    <div>
                        <Link 
                            to="/characters" 
                            onClick={handleMenuClick} 
                            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-marvelWhite hover:text-white mr-4"
                        >
                            Characters
                        </Link>
                        <Link 
                            to="/comics" 
                            onClick={handleMenuClick} 
                            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-marvelWhite hover:text-white mr-4"
                        >
                            Comics
                        </Link>
                        <Link 
                            to="/stories" 
                            onClick={handleMenuClick}
                            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-marvelWhite hover:text-white"
                        >
                            Stories
                        </Link>
                    </div>
                </div>
            }
            
        </nav>
    )
}