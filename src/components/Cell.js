import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { pickOne, range } from "../helpers";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

const Cell = ({ current, targets }) => {
    const [target, setTarget] = useState(pickOne(targets));
    const [term, setTerm] = useState(pickOne(range(1, target - 1)));
    const [active, setActive] = useState();
    const classes = classNames("col-md-3 cell", { [`target-${current}`]: active });

    useEffect(() => {
        setTarget(pickOne(targets));
        setTerm(pickOne(range(1, target - 1)));
        setActive(false);
    }, [targets, target]);

    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <div className={classes} onClick={() => setActive(!active)}>
                <div className="cell-content">{`${term} + ${target - term}`}</div>
            </div>
        </CSSTransition>
    );
};

Cell.propTypes = {
    current: PropTypes.number,
    targets: PropTypes.array.isRequired
};

export default Cell;
