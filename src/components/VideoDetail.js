import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={4} style={{ height: "30%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={4} style={{ padding: "10px" }}>
        <Typography variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle3">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
