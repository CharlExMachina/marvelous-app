import React from 'react';
import { Link } from 'react-router-dom';
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
            <h3 className="p-2 font-bold text-gray-700">
                {issue.name}
                <Link className="px-1 text-blue-700" to={`/comics/${issue.resourceURI.split("/comics/")[1]}`}>(See comic)</Link>
            </h3>
            {
                serverResponse.loading ? 
                    <LoadingIndicator /> 
                    : 
                    comic && <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></img>
            }
        </div>
    );
}