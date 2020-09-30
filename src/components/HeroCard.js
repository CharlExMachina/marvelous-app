import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({info}) => {
    return (
        <div className="border m-3 md:mx-10 border-gray-400 rounded-lg overflow-hidden">
            <div className="flex md:justify-center">
                <img className="w-full object-left" style={{height: 537}} src={`${info.thumbnail.path}.${info.thumbnail.extension}`}></img>
            </div>
            <h2 className="text-3xl text-gray-700 uppercase p-2 font-comic">{info.name}</h2>
            <div className="flex flex-col justify-between">
                <p className="p-3 flex-row text-gray-600">{info.description || "No description available"}</p>
                <div className="flex justify-end items-end">
                    <Link 
                        to={`/characters/${info.id}`}
                        className="py-2 px-3 m-2 bg-marvelRed text-marvelWhite uppercase font-comic rounded" 
                        >Read full bio</Link>
                </div>
            </div>
        </div>
    );
}