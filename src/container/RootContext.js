// Ini jika karakter menambahkan hanya 1 assign
import React, { createContext, Component } from "react";

const RootContext = createContext();

class RootProvider extends Component {
  constructor(props) {
    super(props);

    const storedAssignLocation =
      JSON.parse(localStorage.getItem("assignLocation")) || {};

    this.state = {
      assignLocation: storedAssignLocation,
      handleAssignLocation: this.handleAssignLocation,
    };
  }

  handleAssignLocation = (characterId, locationName) => {
    const updatedAssignLocation = { ...this.state.assignLocation };

    // Check if the location is already assigned to any character
    for (const location in updatedAssignLocation) {
      if (
        updatedAssignLocation[location].includes(characterId) &&
        location !== locationName
      ) {
        alert(
          `Karakter ID ${characterId} sudah ditugaskan ke lokasi ${location}.`
        );
        return;
      }
    }

    // Add character to the new location
    if (!updatedAssignLocation[locationName]) {
      updatedAssignLocation[locationName] = [];
    }

    updatedAssignLocation[locationName].push(characterId);

    // Update state and save to localStorage
    this.setState({ assignLocation: updatedAssignLocation }, () => {
      localStorage.setItem(
        "assignLocation",
        JSON.stringify(updatedAssignLocation)
      );
    });
  };

  render() {
    return (
      <RootContext.Provider value={this.state}>
        {this.props.children}
      </RootContext.Provider>
    );
  }
}

export { RootProvider, RootContext };
