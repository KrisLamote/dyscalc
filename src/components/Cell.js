import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { pickOne, range } from "../helpers";

const empty = {
    idx: null,
    value: null,
};

const Cell = ({ current, showErrors, targets, onCorrect, onIncorrect }) => {
    const [target, setTarget] = useState(pickOne(targets));
    const [term, setTerm] = useState(pickOne(range(1, target - 1)));
    const [selected, setSelected] = useState(empty);
    const [isTransitioning, setIsTransitioning] = useState(Array.isArray(targets));
    const classes = classNames("app-row__cell cell", {
        [`target-${selected.idx}`]: selected.idx !== null,
        error: showErrors && selected.idx !== null && target !== selected.value,
    });

    const handleClick = selection => {
        const newVal = selection.idx === selected.idx ? empty : selection;
        if (selected.value !== target && newVal.value === target) {
            onCorrect();
        } else if (selected.value === target && newVal.value !== target) {
            onIncorrect();
        }

        setSelected(newVal);
    };

    useEffect(() => {
        setTarget(pickOne(targets));
        setTerm(pickOne(range(1, target - 1)));
        setSelected({ idx: null, value: null });
        setIsTransitioning(Array.isArray(targets));
    }, [targets, target]);

    return (
        <CSSTransition
            in={isTransitioning}
            appear={true}
            timeout={1000}
            classNames="fade"
            onEntered={(node, isAppearing) => {
                setIsTransitioning(false);
            }}
        >
            <div className={classes} onClick={() => handleClick(current)}>
                <div className="cell-content">{`${term} + ${target - term}`}</div>
            </div>
        </CSSTransition>
    );
};

Cell.defaultProps = {
    current: null,
    showErrors: false,
};

Cell.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired,
    onCorrect: PropTypes.func.isRequired,
    onIncorrect: PropTypes.func.isRequired,
};

export default Cell;
