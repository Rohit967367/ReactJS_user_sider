import { createSlice } from "@reduxjs/toolkit";

const StreamInfo = createSlice({
  name: "streamInfo",
  initialState: {
    streamLink: [],
    oneStreamLink: {
      name: "",
      record: "",
      downstreamUrl: "",
      eventName: "",
      email: "",
      streamKey: "",
      streamUrl: "",
    },
  },
  reducers: {
    getStreamLink(state, action) {
      state.streamLink = action.payload;
    },
    getOneStreamLink(state, action) {
      state.oneStreamLink.name = action.payload.name;
      state.oneStreamLink.record = action.payload.record;
      state.oneStreamLink.downstreamUrl = action.payload.downstreamUrl;
      state.oneStreamLink.email = action.payload.email;
      state.oneStreamLink.eventName = action.payload.eventName;
      state.oneStreamLink.streamKey = action.payload.streamKey;
      state.oneStreamLink.streamUrl = action.payload.streamUrl;
    },
    removeOneStreamLink(state) {
      state.oneStreamLink.name = "";
      state.oneStreamLink.streamUrl = "";
      state.oneStreamLink.downstreamUrl = "";
      state.oneStreamLink.record = "";
      state.oneStreamLink.streamKey = "";
      state.oneStreamLink.email = "";
      state.oneStreamLink.eventName = "";
    },
  },
});

export const { getStreamLink, getOneStreamLink, removeOneStreamLink } =
  StreamInfo.actions;

export default StreamInfo.reducer;
