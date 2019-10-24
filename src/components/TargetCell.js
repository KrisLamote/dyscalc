/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TargetCell = ({ idx, target, selected, onClick }) => {
    const className = classNames(`cell target target-${idx}`, { selected });
    /* see eslint exceptions, this really should be a button */
    return (
        <div className={className} onClick={onClick} role="button">
            <div className="cell-content">{target}</div>
        </div>
    );
};

TargetCell.propTypes = {
    idx: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    target: PropTypes.node.isRequired,
};

export default TargetCell;
