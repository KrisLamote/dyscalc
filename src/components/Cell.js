/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState, useContext, useMemo} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { pickOne, range } from "../helpers";
import { OPERATIONS } from "../enums";
import GameContext from "./GameContext";

const empty = {
    idx: null,
    value: null,
};

const operationFactory = (operation, upto) => { 
    const operations = {
        [OPERATIONS.SUM]: [
            (target)=> pickOne(range(1, target - 1)), 
            (target, term) => `${term} + ${target - term}`
        ],
        [OPERATIONS.SUBTRACT]: [
            (target)=> pickOne(range(target, target + upto)), 
            (target, term) => `${term} - ${term - target}`
        ]
    }

    const proxy = new Proxy(operations, {
        get: (operations, operation) => {
            return operation in operations ?
            operations[operation] :
            operations[OPERATIONS.SUM];
        }
    });

    return proxy[operation]
}

const Cell = ({ current, showErrors, targets, onCorrect, onIncorrect }) => {
    const { state: {options: {operation, upto}} } = useContext(GameContext);
    const [termFactory, labelFactory] = useMemo(() => operationFactory(operation, upto), [operation, upto])  
    const [target, setTarget] = useState(pickOne(targets));
    const [term, setTerm] = useState(termFactory(target));
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
        setTerm(termFactory(target));
        setSelected({ idx: null, value: null });
        setIsTransitioning(Array.isArray(targets));
    }, [targets, target, termFactory]);


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
                <div className="cell-content">{labelFactory(target, term)}</div>
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
