import React from 'react';
import { pickOne, range } from '../helpers';

const Cell = props => {
    const target = pickOne(props.targets);
    const term = pickOne(range(1, target - 1));

    return (
        <div className="col-md-3 cell">
            <div className="cell-content">{`${term} + ${target - term}`}</div>
        </div>
    );
};

Cell.propTypes = {};

export default Cell;
