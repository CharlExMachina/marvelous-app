import React, { useState, useEffect } from 'react';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { HeroCard } from './HeroCard';
import { LoadingIndicator } from './LoadingIndicator';

export const HeroGallery = () => {
    const serverResponse = useAxiosRequest("characters", {
        "limit": 20
    });

    let content = null;

    if (serverResponse.loading) {
        content = <LoadingIndicator />
    } else if (serverResponse.error) {
        content = <h1>An error has occured!</h1>
    } else {
        content = serverResponse.data && serverResponse.data.results.map(characterInfo =>
            <HeroCard key={characterInfo.id} info={characterInfo} /> 
        );
    }

    return content;
}