import React from 'react';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { ErrorScreen } from './ErrorScreen';
import { LoadingIndicator } from './LoadingIndicator';
import { StoryCard } from './StoryCard';

export const StoriesGallery = () => {
    const serverResponse = useAxiosRequest("stories", {limit: 20});

    let content = null;

    if (serverResponse.loading) {
        content = <LoadingIndicator />
    } else if (serverResponse.error) {
        content = <ErrorScreen />
    } else {
        content = serverResponse.data && serverResponse.data.results.map(storyInfo => 
            <StoryCard key={storyInfo.id} info={storyInfo} />    
        );
    }

    return (
        <>
            <h1 className="text-gray-700 px-3 text-4xl font-comic">Stories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {content}
            </div>
        </>
    );
}