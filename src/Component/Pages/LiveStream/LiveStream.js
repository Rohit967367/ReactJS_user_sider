import React, { useEffect, useState } from "react";
import Classes from "./LiveStream.module.css";
import VideoConf from "../../Image/videoConf.jpg";
import { Button, TextField } from "@mui/material";
import {
  FindLiveVideoStreamLink,
  FirebaseStreamLinks,
} from "../../Additional/API/Users";
import { useDispatch, useSelector } from "react-redux";
import { startToster } from "../../Additional/Store/Addition";
import LiveVideoDialog from "./LiveVideoDialog";

const LiveStream = () => {
  const [eventName, setEventName] = useState("");
  const dispatch = useDispatch();
  const linkData = useSelector((state) => state.streamLink);

  const openDialog = useSelector((state) => state.add.liveVideoDialog);

  useEffect(() => {
    FirebaseStreamLinks(dispatch);
  }, [dispatch]);

  const FindLiveStream = (e) => {
    e.preventDefault();

    if (eventName.length > 3) {
      FindLiveVideoStreamLink(eventName, dispatch, linkData);
    } else if (eventName.length <= 3) {
      dispatch(
        startToster({
          msg: "Event name must at least 4 charater",
          type: "warning",
        })
      );
    } else {
      dispatch(
        startToster({
          msg: "Something went wrong for finding event name",
          type: "error",
        })
      );
    }
    setEventName("");
  };

  return (
    <div>
      {openDialog && <LiveVideoDialog />}
      <div className={Classes.contained}>
        <div className={Classes.leftContained}>
          <div className={Classes.container}>
            <h1>Find Live Streaming Event</h1>
            <TextField
              label="Event Name"
              variant="standard"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <Button variant={"contained"} onClick={FindLiveStream}>
              Find
            </Button>
          </div>
        </div>
        <div className={Classes.rightContained}>
          <img src={VideoConf} alt={VideoConf} />
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
