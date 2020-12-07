import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import { range } from "../helpers";

const Row = ({ current, showErrors, targets, ...rest }) => {
    return (
        <div className="row">
            {range(1, 4).map((key) => (
                <Cell
                    key={key.toString()}
                    current={current}
                    showErrors={showErrors}
                    targets={targets}
                    {...rest}
                />
            ))}
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
