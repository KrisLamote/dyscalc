import React, { useEffect, useState, useReducer, useCallback } from "react";
import Header from "./Header";
import Board from "./Board";
import Targets from "./Targets";
import Verify from "./Verify";
import Reset from "./Reset";
import Options from "./Options";
import OptionsContainer from "./OptionsContainer";
import GameState from "./GameState";
import { pickSome, range } from "../helpers";
import { ACTION_TYPE } from "../enums";
import GameContext, { initialOptionState } from "./GameContext";

function optionReducer(state, action) {
    const options = { ...state.options };
    switch (action.type) {
        case ACTION_TYPE.CHANGE_UPTO:
            options.upto = action.payload.data;
            return {
                ...state,
                options,
            };
        case ACTION_TYPE.CHANGE_TARGET:
            options.target = action.payload.data;
            return {
                ...state,
                options,
            };
        case ACTION_TYPE.CHANGE_OPERATION:
            options.operation = action.payload.data;
            return {
                ...state,
                options,
            };
        case ACTION_TYPE.CHANGE_SCORE:
            return {
                ...state,
                score: action.payload.data,
            };
        default:
            throw new Error("No action type matched");
    }
}

const App = () => {
    const [state, dispatch] = useReducer(optionReducer, { options: initialOptionState });
    const { options } = state;
    const generateTargets = useCallback(() => {
        return pickSome(range(2, options.upto), options.target).sort((a, b) => a - b);
    }, [options.upto, options.target]);

    const [targets, setTargets] = useState(generateTargets());
    const [showErrors, setShowErrors] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setTargets(generateTargets());
        dispatch({
            type: ACTION_TYPE.CHANGE_SCORE,
            payload: {
                data: 16,
            },
        });
    }, [generateTargets, options]);

    useEffect(() => {
        setShowErrors(false);
    }, [targets]);

    return (
        <div className="container app">
            <Header className="app__header" />
            <GameContext.Provider value={{ state, dispatch }}>
                <GameState total={16}>
                    {state => {
                        const {
                            current,
                            onCorrect,
                            onIncorrect,
                            onReset,
                            setCurrent,
                        } = state;
                        return (
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
                                        <Targets
                                            targets={targets}
                                            setCurrent={setCurrent}
                                        />
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
                                        <Options
                                            onClick={() => setShowOptions(!showOptions)}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </GameState>
            </GameContext.Provider>
        </div>
    );
};

export default App;
