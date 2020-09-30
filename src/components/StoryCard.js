import React from 'react';
import { Link } from 'react-router-dom';
import { StoryOriginalIssue } from './StoryOriginalIssue';

export const StoryCard = ({info}) => {
    return (
        <div className="border m-3 border-gray-400 rounded-lg overflow-hidden">
            <h2 className="text-lg text-gray-700 uppercase p-2 font-comic">Description</h2>
            <p className="px-2 text-gray-600">{info.title}</p>
            <h2 className="text-lg text-gray-700 uppercase p-2 font-comic">From:</h2>
            <StoryOriginalIssue issue={{id: info.originalIssue.resourceURI.split("/comics/")[1], ...info.originalIssue}} displayCover={false} />
            <div className="flex justify-end">
                <Link 
                    to={`/stories/${info.id}`}
                    className="py-2 px-3 m-2 bg-marvelRed text-marvelWhite uppercase font-comic rounded" 
                    >Read more</Link>
            </div>
        </div>
    );
}