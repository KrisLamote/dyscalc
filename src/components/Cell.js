import React from 'react';
import PropTypes from 'prop-types';
import { pickOne, range } from '../helpers';
import { CSSTransition } from "react-transition-group";

const Cell = ({ targets }) => {
    const target = pickOne(targets);
    const term = pickOne(range(1, target - 1));

    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
        >
        <div className="col-md-3 cell">
            <div className="cell-content">{`${term} + ${target - term}`}</div>
        </div>
        </CSSTransition>
    );
};

Cell.propTypes = {
    targets: PropTypes.array.isRequired
};

export default Cell;
