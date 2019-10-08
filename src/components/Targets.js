import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TargetCell from "./TargetCell";

const Targets = ({ setCurrent, targets }) => {
    const [activeTarget, setActiveTarget] = useState(null);

    const handleTargetClick = idx => {
        const newValue = activeTarget === idx ? null : idx;
        setActiveTarget(newValue);
        setCurrent({ idx, value: targets[idx] });
    };

    useEffect(
        () => {
            setActiveTarget(null);
        },
        [targets]
    );

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="targets" className="col-md-auto" style={{ width: "150px" }}>
                {targets.map((target, idx) => (
                    <TargetCell
                        idx={idx}
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
    targets: PropTypes.array.isRequired
};

export default Targets;
