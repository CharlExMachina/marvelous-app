import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GalleryPagination = ({paginationOffset, totalPages, onMoveNextPage, onMovePreviousPage, onJumpToPage}) => {
    const fillPagesOption = () => {
        const optionsArr = [];
        for (let i = 0; i < totalPages; i++) {
            optionsArr.push(<option key={uuidv4()} value={i + 1}>{i + 1}</option>)
        }

        return optionsArr;
    }

    return (
        <div>
            <div className="p-6 flex-1 flex items-center justify-center">
                <button className="border shadow bg-marvelRed" onClick={onMovePreviousPage}>
                    <span className="text-marvelWhite m-3">Previous page</span>
                </button>
                <span className="px-5">Page 
                    <select defaultValue={paginationOffset} onChange={onJumpToPage}>
                        {fillPagesOption()}
                    </select>/{totalPages}
                </span>
                <button className="border shadow bg-marvelRed" onClick={onMoveNextPage}>
                    <span className="text-marvelWhite m-3">Next page</span>
                </button>
            </div>
        </div>
    );
}