import React from 'react';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { ErrorScreen } from './ErrorScreen';
import { LoadingIndicator } from './LoadingIndicator';
import { ComicCard } from './ComicCard';

export const ComicGallery = () => {
    const serverResponse = useAxiosRequest("comics", {limit: 20});

    let content = null;

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {content}
            </div>
        </>
    );
}