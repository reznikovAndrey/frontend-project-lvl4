import { configureStore } from '@reduxjs/toolkit';

import chatsReducer from './chatsSlice';

export default configureStore({
  reducer: {
    chats: chatsReducer,
  },
});
