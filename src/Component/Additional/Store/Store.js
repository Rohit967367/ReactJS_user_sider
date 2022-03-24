import { configureStore } from "@reduxjs/toolkit";
import Addition from "./Addition";
import StreamInfo from "./StreamInfo";

const Store = configureStore({
  reducer: { streamLink: StreamInfo, add: Addition },
});

export default Store;
