import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videosList = videos.map((video, id) => (
    <VideoItem key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {videosList}
    </Grid>
  );
};

export default VideoList;
