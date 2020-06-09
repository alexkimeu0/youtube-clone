import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTxt: "",
  };

  // Update state as you type on the search bar
  handleChange = (e) => this.setState({ searchTxt: e.target.value });

  // Run on submitting the form
  handleSubmit = (e) => {
    const { searchTxt } = this.state;
    const { formSubmit } = this.props;

    formSubmit(searchTxt);

    e.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
