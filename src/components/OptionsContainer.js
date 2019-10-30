import React, { useContext } from "react";
import PropTypes from "prop-types";
import OptionToggle from "./OptionToggle";
import GameContext from "./GameContext";
import { OPERATIONS, ACTION_TYPE } from "../enums";

const OptionsContainer = ({ showOptions, backToGame }) => {
    const allOptions = {
        upto: [10, 20],
        target: [3, 4, 5],
        operation: [OPERATIONS.SUM, OPERATIONS.SUBTRACT, OPERATIONS.BOTH],
    };

    const { state, dispatch } = useContext(GameContext);
    const { options } = state;

    const handleClick = (option, input) => {
        const value = option === "operation" ? input : Number(input);
        let actionType;

        if (option === "operation") actionType = ACTION_TYPE.CHANGE_OPERATION;
        else if (option === "target") actionType = ACTION_TYPE.CHANGE_TARGET;
        else if (option === "upto") actionType = ACTION_TYPE.CHANGE_UPTO;

        dispatch({
            type: actionType,
            payload: {
                data: value,
            },
        });
    };

    const toggle = Object.keys(options).map(optionKey => (
        <OptionToggle
            key={optionKey}
            label={optionKey.toUpperCase()}
            options={allOptions[optionKey]}
            currentChoice={options[optionKey]}
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
