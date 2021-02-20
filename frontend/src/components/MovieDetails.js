import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';


export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

//  componentDidMount() {
//    const {id} = this.props;
//
//    fetch(`api/movies/${id}`, {
//      method: 'GET',
//      headers: {
//        Accept: 'application/json',
//        'Content-Type': 'application/json'
//      }
//    })
//      .then(response => {
//        if (response.status > 400) {
//          return this.setState(() => {
//            return { placeholder: "Something went wrong!" };
//          });
//        }
//        return response.json();
//      })
//      .then(data => {
//        console.log('Data::', data);
//        this.setState({movie: data.result});
//      });
//  }

  render() {
    const { movie } = this.state;
    const {id} = this.props;

    return (
      <span>
        The Movie details for ID: {id}
      </span>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
}