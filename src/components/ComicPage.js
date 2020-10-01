import React from 'react';
import { LoadingIndicator } from './LoadingIndicator';
import { ComicDates } from './ComicDates';
import { ComicUrls } from './ComicUrls';
import { Toggle } from './Toggle';
import { Link } from 'react-router-dom';
import { ComicPrices } from './ComicPrices';
import useAxiosRequest from '../hooks/useAxiosRequest';

export const ComicPage = ({match}) => {
    const serverResponse = useAxiosRequest(`comics/${match.params.id}`);
    let comic = null;

    if (serverResponse.data) {
        comic = serverResponse.data.results[0];
    }

    return (
        serverResponse.loading ? 
        <LoadingIndicator isLoading={serverResponse.loading} />
        : 
        comic &&
        <div className="border m-3 border-gray-400 rounded-lg overflow-hidden">
            <h1 className="text-4xl text-gray-700 uppercase p-1 font-comic">{comic.title}</h1>
            <div className="grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <img className="lg:h-28 lg:px-3 lg:object-contain" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></img>
                </div>
                <div>
                    <ComicDates dateList={comic.dates} />
                    <ComicUrls urlList={comic.urls} />
                    <p className="p-2 text-gray-600">{comic.description || "No description available"}</p>
                    {
                        comic.issueNumber > 0 
                        ? 
                        <h3 className="p-2 text-gray-700"><span className="text-gray-700 font-comic">Issue number:</span> #{comic.issueNumber}</h3>
                        :
                        <p className="px-2 font-bold">Issue number not available</p>
                    }
                    <h3 className="px-2 font-bold text-lg text-gray-700">Prices:</h3>
                    <ComicPrices prices={comic.prices} />
                    <Toggle title="Featured characters" className="text-3xl inline text-gray-700 uppercase p-2 font-comic">
                        {
                            comic.characters.items.length > 0 
                            ?
                            comic.characters.items.map(character =>
                                <div key={character.resourceURI}>
                                    <p className="font-bold text-gray-700">{character.name}</p>
                                    <Link  
                                        className="text-blue-400"
                                        to={"/characters/" + character.resourceURI.split("/characters/")[1]}
                                        >Read bio</Link>
                                </div>
                            )
                            :
                            <p>No data available</p>
                        }
                    </Toggle>
                </div>
            </div>
        </div>
    );
}