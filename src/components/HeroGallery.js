import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorScreen } from './ErrorScreen';
import { HeroCard } from './HeroCard';
import { LoadingIndicator } from './LoadingIndicator';
import { Toggle } from './Toggle';
import { GalleryPagination } from './GalleryPagination';

export const HeroGallery = () => {
    let content = null;

    const publicKey = "badd148cc7d5975dc382dfabd381d794";
    const baseUrl = "https://gateway.marvel.com/v1/public/characters";

    const [serverResponse, setServerResponse] = useState(
        {
            loading: false,
            data: null,
            error: false
        }
    );

    const [paginationOffset, setPaginationOffset] = useState(1);
    const [orderBy, setOrderBy] = useState(null);
    const [requestParams, setRequestParams] = useState({apikey: publicKey, offset: paginationOffset, orderBy});

    useEffect(() => {
        if (!serverResponse.loading) {
            setServerResponse({
                loading: true,
                data: null,
                error: false
            });
    
            const axiosInstance = axios.create({
                baseURL: baseUrl,
                params: requestParams,
                timeout: 10000,
                method: 'get',
                responseType: 'json',
            });
            
            axiosInstance.get()
            .then(response => {
                // console.log(response);
                setServerResponse({
                    loading: false,
                    data: response.data.data,
                    error: false
                })
            })
            .catch(error => setServerResponse({
                loading: false,
                data: null,
                error: true
            }));
        }
    }, [requestParams]);

    const orderAscending = () => {
        setOrderBy("-name");
        if (orderBy !== "name") {
            setRequestParams({...requestParams, orderBy: "-name"});
        }
    }

    const orderDescending = () => {
        setOrderBy("name");
        if (orderBy !== "-name") {
            setRequestParams({...requestParams, orderBy: "name"}); // it works God knows why ¯\_(ツ)_/¯
        }
    }

    const movePreviousPage = () => {
        if (paginationOffset > 1) {
            setPaginationOffset(paginationOffset - 1);
            setRequestParams({...requestParams, offset: paginationOffset * 20, orderBy});
        }
    }

    const moveNextPage = () => {
        setPaginationOffset(paginationOffset + 1);
        setRequestParams({...requestParams, offset: paginationOffset * 20, orderBy});
    }

    const jumpToPage = event => {
        const offset = Number(event.target.value);
        setPaginationOffset(offset);
        setRequestParams({...requestParams, offset: offset * 20, orderBy});
    }

    if (serverResponse.loading) {
        content = <LoadingIndicator />
    } else if (serverResponse.error) {
        content = <ErrorScreen />
    } else {
        content = serverResponse.data && serverResponse.data.results.map(characterInfo =>
            <HeroCard key={characterInfo.id} info={characterInfo} /> 
        );
    }

    return (
        <>
            <h1 className="text-gray-700 px-3 text-4xl font-comic">Characters</h1>
            <Toggle title="Order by">
                <button className="block" onClick={orderAscending}>Name (Ascending)</button>
                <button className="block" onClick={orderDescending}>Name (Descending)</button>
            </Toggle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {content}
            </div>
            {
                serverResponse.data && 
                <GalleryPagination 
                    paginationOffset={Number(paginationOffset)} 
                    totalPages={Math.round(serverResponse.data.total / 20)}
                    onMoveNextPage={moveNextPage}
                    onMovePreviousPage={movePreviousPage} 
                    onJumpToPage={jumpToPage}
                />               
            }
        </>
    );
}