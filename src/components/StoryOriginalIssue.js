import React from 'react';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { LoadingIndicator } from './LoadingIndicator';

export const StoryOriginalIssue = ({issue}) => {
    const serverResponse = useAxiosRequest(`comics/${issue.id}`);
    let comic = null;

    if (serverResponse.data) {
        comic = serverResponse.data.results[0];
    }

    return (
        <div>
            <span>{issue.name}</span>
            {
                serverResponse.loading ? 
                    <LoadingIndicator /> 
                    : 
                    comic && <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></img>
            }
        </div>
    );
}