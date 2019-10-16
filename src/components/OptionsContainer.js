import React from "react";
import OptionToggle from "./OptionToggle";
import { OPERATIONS, ACTION_TYPE } from "../enums";

const OptionsContainer = ({
  showOptions,
  backToGame,
  optionState,
  optionDispatch,
}) => {
  const options = {
    upto: [10, 20],
    target: [3, 4, 5],
    operation: [OPERATIONS.SUM, OPERATIONS.SUBTRACT, OPERATIONS.BOTH],
  };

  const handleClick = (option, value) => {
    value = option === "operation" ? value : Number(value);
    let actionType;

    if (option === "operation") actionType = ACTION_TYPE.CHANGE_OPERATION;
    else if (option === "target") actionType = ACTION_TYPE.CHANGE_TARGET;
    else if (option === "upto") actionType = ACTION_TYPE.CHANGE_UPTO;

    optionDispatch({
      type: actionType,
      payload: {
        data: value,
      },
    });
  };

  const toggle = Object.keys(options).map(optionKey => (
    <OptionToggle
      key={optionKey}
      label={optionKey.toUpperCase()}
      options={options[optionKey]}
      currentChoice={optionState[optionKey]}
      handleClick={event => handleClick(optionKey, event.target.innerHTML)}
    />
  ));

  return (
    <>
      {showOptions && (
        <>
          <div className="backdrop" onClick={backToGame} />

          <div className="options-container">
            <h4>Select your Preferred Options</h4>
            {toggle}
            <button onClick={backToGame} id="back-to-game">
              Back to Game
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default OptionsContainer;
