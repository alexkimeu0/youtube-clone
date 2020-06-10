import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    topVideos: [],
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleMount();
  }

  handleMount = () => {
    this.handleSubmit("trending");
  };

  handleSubmit = async (searchTxt) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAoyR-57oPSUu49JibDEDrGx1A_ZnORLD4",
        q: searchTxt,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid
        justify="center"
        container
        spacing={12}
        style={{ width: "98vw", margin: "auto", maxWidth: "1200px" }}
      >
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar formSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
