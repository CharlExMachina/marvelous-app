import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeroCard } from './HeroCard';

export const HeroGallery = () => {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const publicKey = "badd148cc7d5975dc382dfabd381d794";
    const privateKey = "b4d93fa4acce25dda350639fd30a1aa173f34bd7";
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
        axiosInstance.get("characters")
        .then(response => {
        setData(response.data.data);
        setIsLoading(false);
        console.log(response.data.data);
        })
        .catch(error => console.log(error));

    }, [currentPage]);

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            <div>
            {
                data && data.results.map(characterInfo =>
                    <HeroCard key={characterInfo.id} info={characterInfo} /> 
                )
            }
            </div>
        </>
    )
}