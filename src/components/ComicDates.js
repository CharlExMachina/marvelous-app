import React from "react";
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const ComicDates = ({dateList}) => {
    return (
        <div className="p-2">
            {dateList.map((date) => {
                if (date.type === "onsaleDate") {
                    return (
                        <h3 key={uuidv4()} className="text-lg text-gray-700"><span className="uppercase font-comic">First on sale:</span> {moment(date.date).format("LL")}</h3>
                    )
                } else if (date.type === "digitalPurchaseDate") {
                    return (
                        <h3 key={uuidv4()} className="text-lg text-gray-700"><span className="uppercase font-comic">Digitally available since:</span> {moment(date.date).format("LL")}</h3>
                    )
                } else if (date.type === "unlimitedDate") {
                    return (
                        <h3 key={uuidv4()} className="text-lg text-gray-700"><span className="uppercase font-comic">On Marvel Unlimited since:</span> {moment(date.date).format("LL")}</h3>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}