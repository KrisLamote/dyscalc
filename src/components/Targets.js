import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TargetCell from "./TargetCell";

const Targets = ({ setCurrent, targets }) => {
    const [activeTarget, setActiveTarget] = useState(null);

    const handleTargetClick = idx => {
        const newValue = activeTarget === idx ? null : idx;
        setActiveTarget(newValue);
        setCurrent(
            newValue !== null ? { idx, value: targets[idx] } : { idx: null, value: null }
        );
    };

    useEffect(() => {
        setActiveTarget(null);
    }, [targets]);

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="targets" className="col-md-auto" style={{ width: "150px" }}>
                {targets.map((target, idx) => (
                    <TargetCell
                        idx={idx}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`target-${idx}`}
                        onClick={() => handleTargetClick(idx)}
                        selected={activeTarget === idx}
                        target={target}
                    />
                ))}
            </div>
        </div>
    );
};

Targets.propTypes = {
    setCurrent: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired,
};

export default Targets;
