import React, { useState, useEffect } from 'react';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { ErrorScreen } from './ErrorScreen';
import { HeroCard } from './HeroCard';
import { LoadingIndicator } from './LoadingIndicator';

export const HeroGallery = () => {
    const serverResponse = useAxiosRequest("characters", {
        limit: 20
    });

    let content = null;

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
            {content}
        </>
    );
}