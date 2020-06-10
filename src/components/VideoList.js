import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosList = videos.map((video, id) => (
    <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {videosList}
    </Grid>
  );
};

export default VideoList;
