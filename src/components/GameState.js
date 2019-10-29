import React, { useState } from "react";
import PropTypes from "prop-types";

const GameState = ({ total, children }) => {
    const [current, setCurrent] = useState({ idx: null, value: null });
    const [items, setItems] = useState(total);
    const onCorrect = () => setItems(items - 1);
    const onIncorrect = () => setItems(items + 1);
    const onReset = () => setItems(total);

    return (
        <>
            {items === 0 ? (
                <p className="text-white bg-dark text-center">Game Completed!</p>
            ) : null}
            {children({ current, onCorrect, onIncorrect, onReset, setCurrent })}
        </>
    );
};

GameState.propTypes = {
    total: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
};

export default GameState;
