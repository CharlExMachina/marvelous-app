import React from 'react';
import { LoadingIndicator } from './LoadingIndicator';
import { v4 as uuidv4 } from 'uuid';
import { Toggle } from './Toggle';
import { Link } from 'react-router-dom';
import useAxiosRequest from '../hooks/useAxiosRequest';
import { StoryOriginalIssue } from './StoryOriginalIssue';

export const StoryPage = ({match}) => {
    const serverResponse = useAxiosRequest(`stories/${match.params.id}`);
    let story = null;

    if (serverResponse.data) {
        story = serverResponse.data.results[0];
    }

    return (
        serverResponse.loading ? 
        <LoadingIndicator isLoading={serverResponse.loading} />
        : story &&
        <div className="border m-3 border-gray-400 rounded-b-md">
            <h1 className="text-4xl text-gray-700 uppercase p-1 font-comic shadow">{story.title}</h1>
            <div className="px-1">
                <h2 className="inline text-lg font-bold text-gray-700">Created by: </h2>
                {
                    story.creators.items
                    .map((creator, index, arr) => {
                        if (index >= arr.length - 1) {
                            return <span key={uuidv4()}>{creator.name}</span>
                        } else {
                            return <span key={uuidv4()}>{creator.name}, </span>
                        }
                    })
                }
            </div>
            <div className="px-1">
                <h2 className="inline text-lg font-bold text-gray-700">From comic: </h2>
                <StoryOriginalIssue issue={{...story.originalIssue, id: story.originalIssue.resourceURI.split("/comics/")[1]}} />
            </div>
            <Toggle title="Featured characters" className="text-3xl inline text-gray-700 uppercase p-2 font-comic">
                {
                    story.characters.items.length > 0 
                    ?
                    story.characters.items.map(character =>
                        <div key={character.resourceURI}>
                            <p className="font-bold text-gray-700">{character.name}</p>
                            <Link  
                                className="text-blue-400"
                                to={"/characters/" + character.resourceURI.split("/characters/")[1]}
                                >Read bio</Link>
                        </div>
                    )
                    :
                    <p>No story available</p>
                }
            </Toggle>
        </div>
    );
}