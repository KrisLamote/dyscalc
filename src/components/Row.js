import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = ({ current, targets }) => {
    return (
        <div className="row no-gutters">
            <Cell current={current} targets={targets} />
            <Cell current={current} targets={targets} />
            <Cell current={current} targets={targets} />
            <Cell current={current} targets={targets} />
        </div>
    );
};

Row.propTypes = {
    current: PropTypes.object,
    targets: PropTypes.array.isRequired
};

export default Row;
