import React from 'react';
const Cell = (props) => (
    <div className="col-md-3 cell">
        <div className="cell-content">{props.target}</div>
    </div>
);
Cell.propTypes = {
};
export default Cell;
