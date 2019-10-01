import React from 'react';

const App = () => (
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
      <div id="board" className="col-8">
        <div className="row">
          <div className="col-md-3 cell">
            <div className="cell-content">2 + 4</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">1 + 5</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">6 + 2</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">3 + 5</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 cell">
            <div className="cell-content">7 + 2</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">7 + 2</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">5 + 3</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">3 + 3</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 cell">
            <div className="cell-content">5 + 1</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">2 + 4</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">5 + 4</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">4 + 5</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 cell">
            <div className="cell-content">4 + 2</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">3 + 3</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">2 + 7</div>
          </div>
          <div className="col-md-3 cell">
            <div className="cell-content">8 + 1</div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row justify-content-md-center no-gutters">
          <div id="targets" className="col-md-auto" style={{ width: '150px' }}>
            <div className="cell target target-0">
              <div className="cell-content">6</div>
            </div>
            <div className="cell target target-1">
              <div className="cell-content">8</div>
            </div>
            <div className="cell target target-2">
              <div className="cell-content">9</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center no-gutters">
          <div id="verify" className="col-md-auto">
            <button className="btn btn-sm btn-outline-primary">VERIFY</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="offset-8 col-4">
        <div className="row justify-content-md-center no-gutters">
          <div id="reset" className="col-md-auto">
            <button className="btn btn-sm btn-outline-primary">RESET</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
