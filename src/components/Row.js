import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = ({ current, showErrors, targets, ...rest }) => {
    return (
        <div className="row">
            <Cell current={current} showErrors={showErrors} targets={targets} {...rest} />
            <Cell current={current} showErrors={showErrors} targets={targets} {...rest} />
            <Cell current={current} showErrors={showErrors} targets={targets} {...rest} />
            <Cell current={current} showErrors={showErrors} targets={targets} {...rest} />
        </div>
    );
};

Row.defaultProps = {
    current: null,
    showErrors: false,
};

Row.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired,
};

export default Row;
