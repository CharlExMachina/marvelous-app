import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorScreen } from './ErrorScreen';
import { LoadingIndicator } from './LoadingIndicator';
import { ComicCard } from './ComicCard';
import { Toggle } from './Toggle';
import { GalleryPagination } from './GalleryPagination';

export const ComicGallery = () => {
    let content = null;
    
    const publicKey = "badd148cc7d5975dc382dfabd381d794";
    const baseUrl = "https://gateway.marvel.com/v1/public/comics";

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
        if (serverResponse.loading) return;

        setOrderBy("-title");
        if (orderBy !== "title") {
            setRequestParams({...requestParams, orderBy: "-title"});
        }
    }

    const orderDescending = () => {
        if (serverResponse.loading) return;

        setOrderBy("title");
        if (orderBy !== "-title") {
            setRequestParams({...requestParams, orderBy: "title"});
        }
    }

    const movePreviousPage = () => {
        if (serverResponse.loading) return;

        if (paginationOffset > 1) {
            setPaginationOffset(paginationOffset - 1);
            setRequestParams({...requestParams, offset: paginationOffset * 20, orderBy});
        }
    }

    const moveNextPage = () => {
        if (serverResponse.loading) return;

        setPaginationOffset(paginationOffset + 1);
        setRequestParams({...requestParams, offset: paginationOffset * 20, orderBy});
    }

    const jumpToPage = event => {
        if (serverResponse.loading) return;

        const offset = Number(event.target.value);
        setPaginationOffset(offset);
        setRequestParams({...requestParams, offset: offset * 20, orderBy});
    }

    if (serverResponse.loading) {
        content = <LoadingIndicator />
    } else if (serverResponse.error) {
        content = <ErrorScreen />
    } else {
        content = serverResponse.data && serverResponse.data.results.map(comicInfo => 
            <ComicCard key={comicInfo.id} info={comicInfo} />    
        );
    }

    return (
        <>
            <h1 className="text-gray-700 px-3 text-4xl font-comic">Comics</h1>
            <Toggle title="Order by">
                <button className={orderBy === "-title" ? "font-bold block" : "block"} onClick={orderAscending}>Name (Ascending)</button>
                <button className={orderBy === "title" ? "font-bold block" : "block"} onClick={orderDescending }>Name (Descending)</button>
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