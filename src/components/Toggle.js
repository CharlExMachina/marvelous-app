import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export const Toggle = ({title, className, ...props}) => {
    const [isExtended, setIsExtended] = useState(false);

    const handleToggle = (event) => {
        event.preventDefault();
        setIsExtended(!isExtended);
    }

    return (
        <div>
            <a href="/#" onClick={handleToggle} className="text-3xl text-gray-700 uppercase p-2 font-comic">
                {title}
                <span>
                    <FontAwesomeIcon className="text-gray-700 px-2 pt-4" style={{fontSize: "1.7em"}} icon={isExtended ? faCaretUp : faCaretDown} />
                </span>
            </a>
            {      
                isExtended &&              
                <div className="p-2">
                    {props.children}
                </div>
            }
        </div>
    )
}