import React from 'react';
import classNames from "classnames";

const OptionsToggle = ({ label, options, handleClick, currentChoice }) => (
    <div>
        <span className="option-label">{label}:</span>
        { options.map(option => {
            const classes = classNames("options", {
                "active-option": option === currentChoice,
            });
            return (
                <button 
                    key={option}
                    onClick={handleClick}
                    className={classes}
                    disabled={option !== options[0]}
                >
                    {option}
                </button>
            )
        })}  
    </div>
);

export default OptionsToggle;
