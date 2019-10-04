import React, {useState} from 'react';
import Header from './Header';
import Board from './Board';
import Targets from './Targets';
import Verify from './Verify';
import Reset from './Reset';
import { pickSome, range } from '../helpers';

const App = () => {

    const generateTargets = () => pickSome(range(2, 10), 3).sort((a, b) => a - b);
    const [targets, setTargets] = useState(generateTargets());

    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-8">
                  <Board targets={targets} />
                </div>
                <div className="col-4">
                    <div className="row justify-content-md-center no-gutters">
                        <Targets targets={targets} />
                    </div>
                    <Verify />
                    <Reset onClick={() => setTargets(generateTargets())} />
                </div>
            </div>
        </div>
    );
};

export default App;
