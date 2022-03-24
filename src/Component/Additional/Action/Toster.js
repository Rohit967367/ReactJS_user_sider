import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopToster } from "../Store/Addition";

const Toster = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.add.toster);
  const CloseToster = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(stopToster());
  };
  return (
    <div>
      {open.type !== "" && (
        <Snackbar
          open={open.tosterOn}
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          onClose={CloseToster}
        >
          <Alert severity={open.type} onClose={CloseToster}>
            {open.msg}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default Toster;
