import React from 'react';
import PropTypes from 'prop-types';

const TargetCell = ({ idx, target, selected, onClick }) => {
    const className = selected ? 'selected ' : '';

    return (
        <div className={`cell target ${className}target-${idx}`} onClick={onClick}>
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
