import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Targets = ({ setCurrent, targets }) => {
    const [activeTarget, setActiveTarget] = useState(null);

    const handleTargetClick = idx => {
        const newValue = activeTarget === idx ? null : idx;
        setActiveTarget(newValue);
        setCurrent(newValue);
    };

    const renderTargetCell = (target, idx) => {
        const key = `target-${idx}`;
        const combinedClassNames = classNames("cell", "target", key, {
            selected: activeTarget === idx
        });
        return (
            <div
                key={key}
                className={combinedClassNames}
                onClick={() => handleTargetClick(idx)}
            >
                <div className="cell-content">{target}</div>
            </div>
        );
    };

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="targets" className="col-md-auto" style={{ width: "150px" }}>
                {targets.map((target, idx) => renderTargetCell(target, idx))}
            </div>
        </div>
    );
};

Targets.propTypes = {
    setCurrent: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired
};

export default Targets;
