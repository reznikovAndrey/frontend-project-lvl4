/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  modalAction: null,
  isShown: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      const { modalAction, channelId = null } = payload;
      state.modalAction = modalAction;
      state.channelId = channelId;
      state.isShown = true;
    },
    closeModal: (state) => {
      state.modalAction = null;
      state.channelId = null;
      state.isShown = false;
    },
  },
});

export const { actions } = modalsSlice;
export default modalsSlice.reducer;
