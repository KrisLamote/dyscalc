import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = ({ current, showErrors, targets }) => {
    return (
        <div className="app-row row no-gutters">
            <Cell className="app-row__cell" current={current} showErrors={showErrors} targets={targets} />
            <Cell className="app-row__cell" current={current} showErrors={showErrors} targets={targets} />
            <Cell className="app-row__cell" current={current} showErrors={showErrors} targets={targets} />
            <Cell className="app-row__cell" current={current} showErrors={showErrors} targets={targets} />
        </div>
    );
};

Row.defaultPropTypes = {
    showErrors: false
};

Row.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired
};

export default Row;
