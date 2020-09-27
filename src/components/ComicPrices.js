import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ComicPrices = ({prices}) => {
    const filteredPrices = prices.filter(price => price.price > 0);

    return (
        filteredPrices.length > 0 ?
        filteredPrices.map(price => {
            if (price.type === "printPrice") {
                return (
                    <div key={uuidv4()} className="px-2">
                        <p className="text-gray-700"><strong>Physical version:</strong> U${price.price}</p>
                    </div>
                )
            } else if (price.type === "digitalPurchasePrice") {
                return (
                    <div key={uuidv4()} className="px-2">
                        <p className="text-gray-700"><strong>Digital release:</strong> U${price.price}</p>
                    </div>
                )
            } else {
                return null;
            }
        })
        :
        <p className="px-2">No pricing info available</p>
    )
}