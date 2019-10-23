import React, { useState } from "react";
import PropTypes from "prop-types";
import OptionToggle from "./OptionToggle";

const OptionsContainer = ({ backToGame, showOptions }) => {
    const options = {
        upto: [10, 20],
        targets: [3, 4, 5],
        operation: ["sum", "subtraction", "both"],
    };

    const [selectedOptions, updateSelectedOptions] = useState({
        upto: options.upto[0],
        operation: options.operation[0],
        targets: options.targets[0],
    });

    const handleClick = (option, input) => {
        const value = option === "operation" ? input : Number(input);
        updateSelectedOptions({
            ...selectedOptions,
            [option]: value,
        });
    };

    const toggle = Object.keys(options).map(optionKey => (
        <OptionToggle
            key={optionKey}
            label={optionKey.toUpperCase()}
            options={options[optionKey]}
            currentChoice={selectedOptions[optionKey]}
            handleClick={event => handleClick(optionKey, event.target.innerHTML)}
        />
    ));

    return (
        <>
            {showOptions && (
                <>
                    {/**
                     * adding role="presentation" is only patch for js lint errors:
                     * - jsx-a11y/click-events-have-key-events
                     * - jsx-a11y/no-static-element-interactions
                     * this really should have a keyDownHandler for ESC
                     */}
                    <div className="backdrop" onClick={backToGame} role="presentation" />
                    <div className="options-container">
                        <h4>Select your Preferred Options</h4>
                        {toggle}
                        <button onClick={backToGame} id="back-to-game" type="button">
                            Back to Game
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

OptionsContainer.defaultProps = {
    showOptions: false,
};

OptionsContainer.propTypes = {
    backToGame: PropTypes.func.isRequired,
    showOptions: PropTypes.bool,
};

export default OptionsContainer;
