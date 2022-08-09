import { configureStore } from '@reduxjs/toolkit';

import chatsReducer from './chatsSlice';
import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    chats: chatsReducer,
    modals: modalsReducer,
  },
});
