import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <h1 className="font-comic text-5xl">Characters</h1>
            <Link to="/characters">
                <img 
                    src="https://vignette.wikia.nocookie.net/marveldatabase/images/e/e1/The_Marvel_Universe.png/revision/latest?cb=20110513164401"
                    className="w-full object-cover"
                    style={{height: 500}}
                />
            </Link>
            <h1 className="font-comic text-5xl">Comics</h1>
            <Link to="/comics">
                <img 
                    src="https://i0.wp.com/moneybadger.stocktwits.com/wp-content/uploads/2018/06/marvel.png?fit=1200%2C630&ssl=1&resize=1280%2C720"
                    className="w-full object-cover"
                    style={{height: 500}}
                />
            </Link>
            <h1 className="font-comic text-5xl">Stories</h1>
            <Link to="/stories">
                <img 
                    src="https://803277.smushcdn.com/1580116/wp-content/uploads/2020/04/marvel-unlimited-offering-free-access-to-iconic-comic-stories.jpeg?lossy=0&strip=0&webp=1"
                    className="w-full object-cover"
                    style={{height: 500}}
                />
            </Link>
        </div>
    )
}