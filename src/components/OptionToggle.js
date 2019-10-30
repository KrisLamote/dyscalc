import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const OptionsToggle = ({ currentChoice, handleClick, label, options }) => (
    <div>
        {/* eslint-disable react/jsx-one-expression-per-line */}
        <span className="option-label">{label}:</span>
        {options.map(option => {
            const classes = classNames("options", {
                "active-option": option === currentChoice,
            });
            const shouldDisableButton = label !== "UPTO" && option !== options[0];
            return (
                <button
                    key={option}
                    onClick={handleClick}
                    className={classes}
                    disabled={shouldDisableButton}
                    type="button"
                >
                    {option}
                </button>
            );
        })}
    </div>
);

OptionsToggle.defaultProps = {
    currentChoice: null,
};

OptionsToggle.propTypes = {
    currentChoice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default OptionsToggle;
