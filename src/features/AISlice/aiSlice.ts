import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  text: string;
  author: 'bot' | 'user';
}

interface InitialState {
  chatHistory: Message[];
}

const initialState: InitialState = {
  chatHistory: [
    {
      author: 'user',
      text: 'Ви всі відраховані!',
    },
  ],
};

const aiSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addChatHistory: (state, { payload }: PayloadAction<Message>) => {
      state.chatHistory.push(payload);
    },
  },
});

export const { addChatHistory } = aiSlice.actions;
export default aiSlice.reducer;
