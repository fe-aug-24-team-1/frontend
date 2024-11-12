import { createContext, Dispatch } from 'react';
import { Action, State } from './types/types';

const initialState: State = {
  theme: 'light',
};

export const ThemeStateContext = createContext<State>(initialState);
export const ThemeDispatchContext = createContext<Dispatch<Action>>(() => {});
