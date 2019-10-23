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
            return (
                <button
                    className={classes}
                    disabled={option !== options[0]}
                    key={option}
                    onClick={handleClick}
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
