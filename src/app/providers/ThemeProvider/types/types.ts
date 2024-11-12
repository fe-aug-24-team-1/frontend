export interface State {
  theme: 'light' | 'dark';
}

export interface Action {
  toggleTheme: () => void;
}
