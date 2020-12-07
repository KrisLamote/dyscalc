import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const OptionToggle = ({ currentChoice, handleClick, key, label, options }) => (
    <div className="option-line">
        {/* eslint-disable react/jsx-one-expression-per-line */}
        <label htmlFor={key} className="option-label">
            <span>{`${label}:`}</span>
        </label>
        <div id={key} className="option-buttons">
            {options.map((option) => {
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

OptionToggle.defaultProps = {
    currentChoice: null,
};

OptionToggle.propTypes = {
    currentChoice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleClick: PropTypes.func.isRequired,
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default OptionToggle;
