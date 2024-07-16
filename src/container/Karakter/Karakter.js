import React, { Component, Fragment } from "react";
import "./Karakter.css";
import KarakterPost from "../../component/KarakterPost/KarakterPost";
import axios from "axios";

class Karakter extends Component {
  state = {
    karakter: [],
  };

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        this.setState({
          karakter: res.data.results,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <Fragment>
        <p className="Karakter">Karakter List</p>
        <div className="karakter-container">
          {this.state.karakter.map((karakter) => (
            <KarakterPost
              key={karakter.id}
              id={karakter.id}
              name={karakter.name}
              status={karakter.status}
              species={karakter.species}
              type={karakter.type}
              gender={karakter.gender}
              episode={karakter.episode.length}
              origin={karakter.origin.name}
              location={karakter.location.name}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Karakter;
