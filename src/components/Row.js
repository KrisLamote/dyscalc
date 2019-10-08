import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = ({ current, showErrors, targets }) => {
    return (
        <div className="row no-gutters">
            <Cell current={current} showErrors={showErrors} targets={targets} />
            <Cell current={current} showErrors={showErrors} targets={targets} />
            <Cell current={current} showErrors={showErrors} targets={targets} />
            <Cell current={current} showErrors={showErrors} targets={targets} />
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
