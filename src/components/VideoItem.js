import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={10}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "5px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle3">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
