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
    const [fading, setFading] = useState(true);

    useEffect(() => {
        setShowErrors(false);
    }, [targets]);

    const sleep = m => new Promise(r => setTimeout(r, m))

    async function handleReset() {
      setFading(false);
      await sleep(1000);
      setTargets(generateTargets());
      await sleep(300);
      setFading(true);
    }

    return (
      <div className="container app">
        <Header className="app__header"/>
        <div className="app__body">
          <div className={`app__body__board ${fading ? 'fadein' : 'fadeout'}`}>
            <Board  current={current} showErrors={showErrors} targets={targets} />
          </div>
          <div className="app__body__controls">
            <div className={`app__body__controls__targets ${fading ? 'fadein' : 'fadeout'}`} >
              <Targets targets={targets} setCurrent={setCurrent} />
            </div>
            <div className="app__body__controls__actions">
              <Verify
                showErrors={showErrors}
                toggle={() => setShowErrors(!showErrors)}
              />
              <Reset onClick={() => handleReset()} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
