import React from 'react';

const Targets = ({ targets }) => {
    const renderTargetCell = (target, idx) => {
        const key = `target-${idx}`;
        return (
            <div key={key} className={`cell target ${key}`}>
                <div className="cell-content">{target}</div>
            </div>
        );
    };

    return (
        <div id="targets" className="col-md-auto" style={{ width: '150px' }}>
            {targets.map((target, idx) => renderTargetCell(target, idx))}
        </div>
    );
};

export default Targets;
