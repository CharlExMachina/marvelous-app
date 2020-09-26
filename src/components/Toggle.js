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
            <span className={className}>{title}</span>
            <a 
                href="/#" 
                onClick={handleToggle}
            >
                <FontAwesomeIcon className="text-gray-700" size="2x" icon={isExtended ? faCaretUp : faCaretDown} />
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