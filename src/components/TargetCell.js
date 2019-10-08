import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TargetCell = ({ idx, target, selected, onClick }) => {
    const className = classNames(`cell target target-${idx}`, { selected });

    return (
        <div className={className} onClick={onClick}>
            <div className="cell-content">{target}</div>
        </div>
    );
};

TargetCell.propTypes = {
    idx: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    target: PropTypes.node.isRequired
};

export default TargetCell;
