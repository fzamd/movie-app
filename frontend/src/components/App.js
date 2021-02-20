import React, { Component } from "react";
import { render } from "react-dom";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovieId: null
    }

    this.handleShowMovieDetails = this.handleShowMovieDetails.bind(this);
  }

  handleShowMovieDetails(id) {
    this.setState({selectedMovieId: id});
  }

  render() {
    const {selectedMovieId} = this.state;

    return (
      <div>
        <MoviesList onShowDetails={this.handleShowMovieDetails}/>
        {selectedMovieId &&
            <MovieDetails id={selectedMovieId}/>
        }
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);