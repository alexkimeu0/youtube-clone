import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
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

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar formSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
