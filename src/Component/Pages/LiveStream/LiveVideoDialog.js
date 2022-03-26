import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { closeLiveVideoDialog } from "../../Additional/Store/Addition";

const LiveVideoDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.add.liveVideoDialog);
  const link = useSelector((state) => state.streamLink.oneStreamLink);
  console.log(open);
  console.log(link);

  const handleClose = () => {
    dispatch(closeLiveVideoDialog());
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Event Name: ${link.name}`}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>{`Event Name: ${link?.record}`}</DialogContentText> */}
          <ReactPlayer
            url={link.downstreamUrl}
            controls
            width={"500px"}
            height={"350px"}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LiveVideoDialog;
