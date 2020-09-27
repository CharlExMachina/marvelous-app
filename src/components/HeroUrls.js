import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const HeroUrls = ({urlList}) => {
    return (
        <div className="px-2">
            {urlList.map((url) => {
                if (url.type === "wiki") {
                    return (
                        <p key={uuidv4()}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> character's wiki entry</a>
                        </p>   
                    )
                } else if (url.type === "detail") {
                    return (
                        <p key={uuidv4()}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> character's details</a>
                        </p>   
                    )
                } else if (url.type === "comiclink") {
                    return (
                        <p key={uuidv4()}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> comics list</a>
                        </p>   
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}