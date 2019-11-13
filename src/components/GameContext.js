import { createContext } from "react";
import { OPERATIONS } from "../enums";

export const initialOptionState = {
    upto: 10,
    target: 5,
    operation: OPERATIONS.SUM,
};

const GameContext = createContext();

export default GameContext;
