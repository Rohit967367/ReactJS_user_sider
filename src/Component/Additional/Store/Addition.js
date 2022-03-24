import { createSlice } from "@reduxjs/toolkit";

const Addition = createSlice({
  name: "name",
  initialState: {
    toster: {
      tosterOn: false,
      msg: "",
      type: "",
    },
    liveVideoDialog: false,
    LiveVideoList: [],
  },
  reducers: {
    startToster(state, action) {
      state.toster.tosterOn = true;
      state.toster.type = action.payload.type;
      state.toster.msg = action.payload.msg;
    },
    stopToster(state) {
      state.toster.tosterOn = false;
      state.toster.type = "";
      state.toster.type = "";
    },
    openLiveVideoDialog(state) {
      state.liveVideoDialog = true;
    },
    closeLiveVideoDialog(state) {
      state.liveVideoDialog = false;
    },
    getListVideo(state, action) {
      state.LiveVideoList = action.payload;
    },
  },
});

export const {
  startToster,
  stopToster,
  openLiveVideoDialog,
  closeLiveVideoDialog,
  getListVideo,
} = Addition.actions;

export default Addition.reducer;
