import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = ({ targets }) => {
    return (
        <div className="row">
            <Cell targets={targets} />
            <Cell targets={targets} />
            <Cell targets={targets} />
            <Cell targets={targets} />
        </div>
    );
};

Row.propTypes = {
    targets: PropTypes.array.isRequired
};

export default Row;
