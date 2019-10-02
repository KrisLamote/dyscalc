import React from 'react';
import PropTypes from 'prop-types';
import { pickOne, range } from '../helpers';

const Cell = ({ targets }) => {
    const target = pickOne(targets);
    const term = pickOne(range(1, target - 1));

    return (
        <div className="col-md-3 cell">
            <div className="cell-content">{`${term} + ${target - term}`}</div>
        </div>
    );
};

Cell.propTypes = {
    targets: PropTypes.array.isRequired
};

export default Cell;
