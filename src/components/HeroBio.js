import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeroUrls } from './HeroUrls';
import { Toggle } from './Toggle';

export const HeroBio = ({ match }) => {
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
        axiosInstance.get(`characters/${match.params.id}`)
        .then(response => {
        setData(response.data.data.results[0]);
        setIsLoading(false);
        console.log(response.data.data.results[0]);
        })
        .catch(error => console.log(error));

    }, [baseUrl]);

    return (
        isLoading ? <p>Loading...</p> : data &&
        <div className="border m-3 border-gray-400 rounded-b-md">
            <h1 className="text-4xl text-gray-700 uppercase p-1 font-comic shadow">Character Profile:</h1>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}></img>
            <h2 className="text-3xl text-gray-700 uppercase p-2 font-comic">{data.name}</h2>
            <HeroUrls urlList={data.urls} />
            <p className="p-2 text-gray-600">{data.description || "No description available"}</p>
            <Toggle title="Stories" className="text-3xl inline text-gray-700 uppercase p-2 font-comic">
                {
                    data.stories.items.map(story =>
                        <div key={story.resourceURI}>
                            <p className="font-bold text-gray-700">{story.name}</p>
                            <a  
                                className="text-blue-400"
                                href={story.resourceURI}
                                >See story</a>
                        </div>
                    )
                }
            </Toggle>
            <Toggle title="Comics" className="text-3xl text-gray-700 uppercase p-2 font-comic">
                {
                    data.comics.items.map(comic =>
                        <div key={comic.resourceURI}>
                            <p className="font-bold text-gray-700">{comic.name}</p>
                            <a  
                                className="text-blue-400"
                                href={comic.resourceURI}
                            >See comic</a>
                        </div>
                    )
                }
            </Toggle>
        </div>
    )
}