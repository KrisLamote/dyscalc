/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import GameContext from "./GameContext";
import { pickOne, range } from "../helpers";
import { OPERATIONS } from "../enums";

const empty = {
    idx: null,
    value: null,
};

const Cell = ({ current, showErrors, targets, onCorrect, onIncorrect }) => {
    const { state } = useContext(GameContext);
    const { upto, operation } = state.options;
    const [target, setTarget] = useState(null);
    const [term, setTerm] = useState(null);
    const [selected, setSelected] = useState(empty);
    const [isTransitioning, setIsTransitioning] = useState(Array.isArray(targets));
    const classes = classNames("app-row__cell cell", {
        [`target-${selected.idx}`]: selected.idx !== null,
        error: showErrors && selected.idx !== null && target !== selected.value,
    });

    // eslint-disable-next-line operator-linebreak
    const label =
        operation === OPERATIONS.SUBTRACT
            ? `${term} - ${term - target}`
            : `${term} + ${target - term}`;

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
        // maybe usePrevious could solve this
        if (target && target <= upto) {
            setTerm(
                operation === OPERATIONS.SUBTRACT
                    ? pickOne(range(target, upto))
                    : pickOne(range(1, target - 1))
            );
        }
    }, [target, upto, operation]);

    useEffect(() => {
        setTarget(pickOne(targets));
        setSelected({ idx: null, value: null });
        setIsTransitioning(Array.isArray(targets));
    }, [targets]);

    return (
        <CSSTransition
            in={isTransitioning}
            // eslint-disable-next-line react/jsx-boolean-value
            appear={true}
            timeout={1000}
            classNames="fade"
            onEntered={() => {
                setIsTransitioning(false);
            }}
        >
            {/* see eslint exceptions, this really should be a button */}
            <div className={classes} onClick={() => handleClick(current)} role="button">
                <div className="cell-content">{label}</div>
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
