import React, { useState } from "react";
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

    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-8">
                    <Board current={current} targets={targets} />
                </div>
                <div className="col-4">
                    <Targets targets={targets} setCurrent={setCurrent} />
                    <Verify />
                </div>
            </div>
            <div className="row">
                <div className="offset-8 col-4">
                    <Reset onClick={() => setTargets(generateTargets())} />
                </div>
            </div>
        </div>
    );
};

export default App;
