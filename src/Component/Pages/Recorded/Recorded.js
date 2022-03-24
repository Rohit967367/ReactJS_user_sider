import React, { useEffect } from "react";
import { RecordedVideoList } from "../../Additional/API/Users";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import noData from "../../Image/noData.svg";

const Recorded = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    RecordedVideoList(dispatch);
  }, [dispatch]);

  const data = useSelector((state) => state.add.LiveVideoList);

  if (data.length === 0) {
    return (
      <div style={{ height: "100px" }}>
        <div style={{ height: "100%" }}>
          <img alt={noData} src={noData} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Live Video Stream
      </h1>
      {data.map((live) => (
        <div
          style={{
            marginBottom: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactPlayer url={live.recordingUrl} controls />
        </div>
      ))}
    </div>
  );
};

export default Recorded;
