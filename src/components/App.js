import React from 'react';
import Board from './Board';
import { pickSome, range } from '../helpers';

const App = () => {
    const targets = pickSome(range(2, 10), 3);

    const renderTargetCell = (target, idx) => {
        const key = `target-${idx}`;
        return (
            <div key={key} className={`cell target ${key}`}>
                <div className="cell-content">{target}</div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <header className="py-5 text-center">
                        <h2>Dyscalc</h2>
                    </header>
                </div>
                <div className="col-4" />
            </div>
            <div className="row">
                <Board targets={targets} />
                <div className="col-4">
                    <div className="row justify-content-md-center no-gutters">
                        <div
                            id="targets"
                            className="col-md-auto"
                            style={{ width: '150px' }}
                        >
                            {targets.map((target, idx) =>
                                renderTargetCell(target, idx)
                            )}
                        </div>
                    </div>
                    <div className="row justify-content-md-center no-gutters">
                        <div id="verify" className="col-md-auto">
                            <button className="btn btn-sm btn-outline-primary">
                                VERIFY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="offset-8 col-4">
                    <div className="row justify-content-md-center no-gutters">
                        <div id="reset" className="col-md-auto">
                            <button className="btn btn-sm btn-outline-primary">
                                RESET
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
