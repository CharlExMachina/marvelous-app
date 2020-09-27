import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ComicUrls = ({urlList}) => {
    return (
        <div className="px-2">
            {urlList.map((url) => {
                if (url.type === "detail") {
                    return (
                        <p key={uuidv4()}>
                            See
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> on Marvel</a>
                        </p>   
                    )
                } else if (url.type === "purchase") {
                    return (
                        <p key={uuidv4()}>
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href={url.url}> Purchase this comic</a>
                        </p>   
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}