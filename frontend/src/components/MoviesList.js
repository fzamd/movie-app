import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: false,
      placeholder: "Loading"
    };
    this.handleShowDetails = this.handleShowDetails.bind(this);
  }

  componentDidMount() {
    fetch("api/movies/", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Data::', data);
        this.setState({movies: data.results});
      });
  }

  handleShowDetails(event) {
    console.log('Event::', event.target.getAttribute('movieId'));
    const movieId = event.target.getAttribute('movieId');
    const {onShowDetails} = this.props;
    onShowDetails(movieId);
  }

  render() {
    const { movies } = this.state;
    return (
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id} movieId={movie.id} onClick={this.handleShowDetails}>
              {movie.title} - {movie.published_at}
            </li>
          );
        })}
      </ul>
    );
  }
}

MoviesList.propTypes = {
  onShowDetails: PropTypes.func.isRequired
}
