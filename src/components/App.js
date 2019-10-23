import React, { useEffect, useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Targets from "./Targets";
import Verify from "./Verify";
import Reset from "./Reset";
import Options from "./Options";
import OptionsContainer from "./OptionsContainer";
import GameState from "./GameState";
import { pickSome, range } from "../helpers";

const App = () => {
    const generateTargets = () => pickSome(range(2, 10), 3).sort((a, b) => a - b);
    const [targets, setTargets] = useState(generateTargets());
    const [current, setCurrent] = useState({ idx: null, value: null });
    const [showErrors, setShowErrors] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setShowErrors(false);
    }, [targets]);

    return (
        <div className="container app">
            <Header className="app__header" />
            <GameState total={16}>
                {({ onCorrect, onIncorrect, onReset }) => (
                    <div className="app__body">
                        <div className="app__body__board">
                            <Board
                                current={current}
                                showErrors={showErrors}
                                targets={targets}
                                onCorrect={onCorrect}
                                onIncorrect={onIncorrect}
                            />
                            <OptionsContainer
                                showOptions={showOptions}
                                backToGame={() => setShowOptions(!showOptions)}
                            />
                        </div>
                        <div className="app__body__controls">
                            <div className="app__body__controls__targets">
                                <Targets targets={targets} setCurrent={setCurrent} />
                            </div>
                            <div className="app__body__controls__actions">
                                <Verify
                                    showErrors={showErrors}
                                    toggle={() => setShowErrors(!showErrors)}
                                />
                                <Reset
                                    onClick={() => {
                                        onReset();
                                        setTargets(generateTargets());
                                    }}
                                />
                                <Options onClick={() => setShowOptions(!showOptions)} />
                            </div>
                        </div>
                    </div>
                )}
            </GameState>
        </div>
    );
};

export default App;
