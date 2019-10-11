import React, { useEffect, useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Targets from "./Targets";
import Verify from "./Verify";
import Reset from "./Reset";
import { pickSome, range } from "../helpers";

const App = () => {
    const generateTargets = () => pickSome(range(2, 10), 3).sort((a, b) => a - b);
    const [targets, setTargets] = useState(generateTargets());
    const [current, setCurrent] = useState({ idx: null, value: null });
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        setShowErrors(false);
    }, [targets]);

    return (
        <div className="container app">
            <Header className="app__header" />
            <div className="app__body">
                <div className="app__body__board">
                    <Board current={current} showErrors={showErrors} targets={targets} />
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
                        <Reset onClick={() => setTargets(generateTargets())} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
