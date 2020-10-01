import React from 'react';
import { Link } from 'react-router-dom';

export const ComicCard = ({info}) => {
    return (
        <div className="border m-3 md:mx-10 border-gray-400 rounded-lg overflow-hidden shadow-md">
            <div className="flex md:justify-center">
                <img className="object-left" style={{height: 537}} src={`${info.thumbnail.path}.${info.thumbnail.extension}`}></img>
            </div>
            <h2 className="text-3xl text-gray-700 uppercase p-2 font-comic">{info.title}</h2>
            <p className="p-3 text-gray-600">{info.description || "No description available"}</p>
            <div className="flex justify-end">
                <Link 
                    to={`/comics/${info.id}`}
                    className="py-2 px-3 m-2 bg-marvelRed text-marvelWhite uppercase font-comic rounded" 
                    >Read more</Link>
            </div>
        </div>
    );
}