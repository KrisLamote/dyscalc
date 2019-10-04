import React, { useState } from "react";
import classNames from "classnames";

const Targets = ({ targets }) => {
  const [activeTarget, setActiveTarget] = useState('');

  const handleTargetClick = id => activeTarget === id ? setActiveTarget('') : setActiveTarget(id);

  const renderTargetCell = (target, idx) => {
    const key = `target-${idx}`;
    const combinedClassNames = classNames('cell', 'target', key, {selected: activeTarget === idx})
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
    <div id="targets" className="col-md-auto" style={{ width: "150px" }}>
      {targets.map((target, idx) => renderTargetCell(target, idx))}
    </div>
  );
};

export default Targets;
