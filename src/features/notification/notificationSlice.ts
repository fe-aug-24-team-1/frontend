import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = [string, string];

interface InitialState {
  notification: State;
}

const initialState: InitialState = {
  notification: ['none', 'none'],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, { payload }: PayloadAction<State>) => {
      state.notification = payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
