import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export const LoadingIndicator = ({isLoading}) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <ScaleLoader loading={isLoading} color={"#F0131E"} /> 
        </div>
    )
}