import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const OptionsToggle = ({ currentChoice, handleClick, label, options }) => (
    <div className="option-line">
        {/* eslint-disable react/jsx-one-expression-per-line */}
        <label className="option-label">
            <span>{`${label}:`}</span>
        </label>
        <div className="option-buttons">
            {options.map(option => {
                const classes = classNames("options", {
                    "active-option": option === currentChoice,
                });
                const shouldDisableButton = false;
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
