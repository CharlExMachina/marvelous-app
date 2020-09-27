import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingIndicator } from './LoadingIndicator';
import { ComicDates } from './ComicDates';
import { ComicUrls } from './ComicUrls';
import { Toggle } from './Toggle';
import { Link } from 'react-router-dom';
import { ComicPrices } from './ComicPrices';

export const StoryPage = ({match}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const publicKey = "badd148cc7d5975dc382dfabd381d794";
    const baseUrl = "https://gateway.marvel.com/v1/public/";

    useEffect(() => {
        const axiosInstance = axios.create({
        baseURL: baseUrl,
        params: {
            "apikey": publicKey,
            "limit": 20
        },
            timeout: 10000,
            method: 'get',
            responseType: 'json',
        });
        axiosInstance.get(`comics/${match.params.id}`)
        .then(response => {
        setData(response.data.data.results[0]);
        setIsLoading(false);
        console.log(response.data.data.results[0]);
        })
        .catch(error => console.log(error));

    }, [baseUrl]);

    return (
        isLoading ? 
        <LoadingIndicator isLoading={isLoading} />
        : data &&
        <div className="border m-3 border-gray-400 rounded-b-md">
            <h1 className="text-4xl text-gray-700 uppercase p-1 font-comic shadow">{data.title}</h1>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}></img>
            <ComicDates dateList={data.dates} />
            <ComicUrls urlList={data.urls} />
            {/* <HeroUrls urlList={data.urls} /> */}
            <p className="p-2 text-gray-600">{data.description || "No description available"}</p>
            {
                data.issueNumber > 0 
                ? 
                <h3 className="p-2 text-gray-700"><span className="text-gray-700 font-comic">Issue number:</span> #{data.issueNumber}</h3>
                :
                <p className="px-2">Issue number not available</p>
            }
            <h3 className="px-2 font-bold text-lg text-gray-700">Prices:</h3>
            <ComicPrices prices={data.prices} />
            <Toggle title="Featured characters" className="text-3xl inline text-gray-700 uppercase p-2 font-comic">
                {
                    data.characters.items.length > 0 
                    ?
                    data.characters.items.map(character =>
                        <div key={character.resourceURI}>
                            <p className="font-bold text-gray-700">{character.name}</p>
                            <Link  
                                className="text-blue-400"
                                to={"/characters/" + character.resourceURI.split("/characters/")[1]}
                                >Read bio</Link>
                        </div>
                    )
                    :
                    <p>No data available</p>
                }
            </Toggle>
        </div>
    )
}