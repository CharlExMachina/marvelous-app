import React from 'react';

export const HeroUrls = ({urlList}) => {
    return (
        <div className="px-2">
            {urlList.map((url, index) => {
                if (url.type === "wiki") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> character's wiki entry</a>
                        </p>   
                    )
                } else if (url.type === "detail") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> character's details</a>
                        </p>   
                    )
                } else if (url.type === "comiclink") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> comics list</a>
                        </p>   
                    )
                } else {
                    return (
                        <p key={index}>
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}>Learn more</a>
                        </p>
                    )
                }
            })}
        </div>
    )
}