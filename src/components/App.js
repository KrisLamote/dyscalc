import React from 'react';
import Header from './Header';
import Board from './Board';
import Targets from './Targets';
import Verify from './Verify';
import Reset from './Reset';
import { pickSome, range } from '../helpers';

const App = () => {
    const targets = pickSome(range(2, 10), 3).sort((a, b) => a - b);

    return (
        <div className="container">
            <Header />
            <div className="row">
                <Board targets={targets} />
                <div className="col-4">
                    <div className="row justify-content-md-center no-gutters">
                        <Targets targets={targets} />
                    </div>
                    <Verify />
                </div>
            </div>
            <Reset />
        </div>
    );
};

export default App;
