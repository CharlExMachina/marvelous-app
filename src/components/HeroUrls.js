import React from 'react';

export const HeroUrls = ({urlList}) => {
    return (
        <div className="px-2">
            {urlList.map((url, index) => {
                if (url.type === "wiki") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" className="text-blue-600" href={url.url}> character's wiki entry</a>
                        </p>   
                    )
                } else if (url.type === "detail") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" className="text-blue-600" href={url.url}> character's details</a>
                        </p>   
                    )
                } else if (url.type === "comiclink") {
                    return (
                        <p key={index}>
                            See
                            <a target="_blank" className="text-blue-600" href={url.url}> comics list</a>
                        </p>   
                    )
                }
            })}
        </div>
    )
}