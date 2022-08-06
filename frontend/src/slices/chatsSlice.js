/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes';

export const fetchChats = createAsyncThunk('data/fetchChats', async (headers) => {
  const response = await axios.get(routes.data(), { headers });
  return response.data;
});

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
  loading: false,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    changeChannel: (state, { payload }) => {
      state.currentChannelId = payload;
    },
    addMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, { payload }) => {
      const { channels, messages, currentChannelId } = payload;
      state.channels = channels;
      state.messages = messages;
      state.currentChannelId = currentChannelId;
      state.loading = false;
    });
  },
});

export const { actions } = chatsSlice;

export default chatsSlice.reducer;
