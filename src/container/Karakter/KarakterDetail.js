// Ini jika karakter menambahkan 2 assign location
// import React, { Component, Fragment } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { RootContext } from "../RootContext";

// class KarakterDetailClass extends Component {
//   static contextType = RootContext;

//   state = {
//     karakter: null,
//     selectedLocation: "",
//     showNotification: false,
//   };

//   componentDidMount() {
//     const { id } = this.props.params;
//     // Ambil detail karakter
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((res) => {
//         this.setState({
//           karakter: res.data,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching character details:", error);
//       });
//   }

//   handleLocationChange = (event) => {
//     this.setState({ selectedLocation: event.target.value });
//   };

//   handleAssignLocation = () => {
//     const { handleAssignLocation } = this.context;
//     const { karakter, selectedLocation } = this.state;

//     // Validasi apakah karakter sudah ditugaskan ke lokasi yang sama
//     const assignedCharacters = this.context.assignLocation[selectedLocation];
//     if (assignedCharacters && assignedCharacters.includes(karakter.id)) {
//       alert("Karakter sudah ditugaskan ke lokasi ini.");
//       return;
//     }

//     // Validasi apakah lokasi sudah digunakan oleh karakter lain
//     for (const location in this.context.assignLocation) {
//       if (
//         location === selectedLocation &&
//         this.context.assignLocation[location].length > 0 &&
//         !this.context.assignLocation[location].includes(karakter.id)
//       ) {
//         alert(
//           `Lokasi ${location} sudah digunakan oleh karakter lain. Silakan masukkan lokasi penugasan lain.`
//         );
//         return;
//       }
//     }

//     // Assign karakter ke lokasi baru
//     handleAssignLocation(karakter.id, selectedLocation);
//   };

//   render() {
//     const { karakter, selectedLocation } = this.state;

//     if (!karakter) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <Fragment>
//         <p className="karakter-detail">Karakter Detail</p>
//         <div className="karakter-detail-container">
//           <div className="nameKarakter">Name : {karakter.name}</div>
//           <div className="statusKarakter">Status : {karakter.status}</div>
//           <div className="speciesKarakter">Species : {karakter.species}</div>
//           <div className="typeKarakter">Type : {karakter.type}</div>
//           <div className="genderKarakter">Gender : {karakter.gender}</div>
//           <div className="episodeKarakter">
//             Episode : {karakter.episode.length}
//           </div>
//           <div className="originKarakter">Origin : {karakter.origin.name}</div>
//           <div className="locationKarakter">
//             Location : {karakter.location.name}
//           </div>
//           <div className="assign-location-container">
//             <label className="assign-label">Add Assign Location :</label>
//             <br></br>
//             <input
//               type="text"
//               value={selectedLocation}
//               onChange={this.handleLocationChange}
//               placeholder="Assign Location"
//               style={{
//                 width: "100%",
//                 maxWidth: "300px",
//                 padding: "8px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//             <button
//               className="assign-location-button"
//               onClick={this.handleAssignLocation}
//             >
//               Assign
//             </button>
//           </div>
//           <div className="button-container">
//             <Link to="/" className="detail-button-home">
//               Home
//             </Link>
//           </div>
//         </div>
//         {showNotification && (
//           <div className="assign-success-notification">
//             Assign location berhasil ditambahkan.
//           </div>
//         )}
//       </Fragment>
//     );
//   }
// }

// const KarakterDetail = () => {
//   const params = useParams();
//   return <KarakterDetailClass params={params} />;
// };

// export default KarakterDetail;

// Ini jika karakter menambahkan hanya 1 assign
// import React, { Component, Fragment } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { RootContext } from "../RootContext";

// class KarakterDetailClass extends Component {
//   static contextType = RootContext;

//   state = {
//     karakter: null,
//     selectedLocation: "",
//   };

//   componentDidMount() {
//     const { id } = this.props.params;
//     // Ambil detail karakter
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((res) => {
//         this.setState({
//           karakter: res.data,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching character details:", error);
//       });
//   }

//   handleLocationChange = (event) => {
//     this.setState({ selectedLocation: event.target.value });
//   };

//   handleAssignLocation = () => {
//     const { handleAssignLocation } = this.context;
//     const { karakter, selectedLocation } = this.state;

//     // Assign karakter ke lokasi baru
//     handleAssignLocation(karakter.id, selectedLocation);
//   };

//   render() {
//     const { karakter, selectedLocation } = this.state;

//     if (!karakter) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <Fragment>
//       <p className="karakter-detail">Karakter Detail</p>
//       <div className="karakter-detail-container">
//         <div className="nameKarakter">Name : {karakter.name}</div>
//         <div className="statusKarakter">Status : {karakter.status}</div>
//         <div className="speciesKarakter">Species : {karakter.species}</div>
//         <div className="typeKarakter">Type : {karakter.type}</div>
//         <div className="genderKarakter">Gender : {karakter.gender}</div>
//         <div className="episodeKarakter">
//           Episode : {karakter.episode.length}
//         </div>
//         <div className="originKarakter">Origin : {karakter.origin.name}</div>
//         <div className="locationKarakter">
//           Location : {karakter.location.name}
//         </div>
//         <div className="assign-location-container">
//           <label className="assign-label">Add Assign Location :</label>
//           <br></br>
//           <input
//             type="text"
//             value={selectedLocation}
//             onChange={this.handleLocationChange}
//             placeholder="Assign Location"
//             style={{
//               width: "100%",
//               maxWidth: "300px",
//               padding: "8px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//           <button
//             className="assign-location-button"
//             onClick={this.handleAssignLocation}
//           >
//             Assign
//           </button>
//         </div>
//         <div className="button-container">
//           <Link to="/" className="detail-button-home">
//             Home
//           </Link>
//         </div>
//       </div>
//       {showNotification && (
//         <div className="assign-success-notification">
//           Assign location berhasil ditambahkan.
//         </div>
//       )}
//     </Fragment>
//   );
//   }
// }

// const KarakterDetail = () => {
//   const params = useParams();
//   return <KarakterDetailClass params={params} />;
// };

// export default KarakterDetail;

import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { RootContext } from "../RootContext";

class KarakterDetailClass extends Component {
  static contextType = RootContext;

  state = {
    karakter: null,
    selectedLocation: "",
    showNotification: false,
  };

  componentDidMount() {
    const { id } = this.props.params;
    // Ambil detail karakter
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        this.setState({
          karakter: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }

  handleLocationChange = (event) => {
    this.setState({ selectedLocation: event.target.value });
  };

  handleAssignLocation = () => {
    const { handleAssignLocation } = this.context;
    const { karakter, selectedLocation } = this.state;

    // Assign karakter ke lokasi baru
    handleAssignLocation(karakter.id, selectedLocation);

    // Tampilkan notifikasi
    this.setState({ showNotification: true });

    // Sembunyikan notifikasi setelah beberapa detik
    setTimeout(() => {
      this.setState({ showNotification: false });

      // Lakukan navigasi kembali ke halaman utama
      window.location.href = "/"; // Ini akan memuat ulang halaman utama
    }, 3000); // 3000 milliseconds = 3 detik
  };

  render() {
    const { karakter, selectedLocation, showNotification } = this.state;

    if (!karakter) {
      return <p>Loading...</p>;
    }

    return (
      <Fragment>
        <p className="karakter-detail">Karakter Detail</p>
        <div className="karakter-detail-container">
          <div className="nameKarakter">Name : {karakter.name}</div>
          <div className="statusKarakter">Status : {karakter.status}</div>
          <div className="speciesKarakter">Species : {karakter.species}</div>
          <div className="typeKarakter">Type : {karakter.type}</div>
          <div className="genderKarakter">Gender : {karakter.gender}</div>
          <div className="episodeKarakter">
            Episode : {karakter.episode.length}
          </div>
          <div className="originKarakter">Origin : {karakter.origin.name}</div>
          <div className="locationKarakter">
            Location : {karakter.location.name}
          </div>
          <div className="assign-location-container">
            <label className="assign-label">Add Assign Location :</label>
            <br></br>
            <input
              type="text"
              value={selectedLocation}
              onChange={this.handleLocationChange}
              placeholder="Assign Location"
              style={{
                width: "100%",
                maxWidth: "300px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <button
              className="assign-location-button"
              onClick={this.handleAssignLocation}
            >
              Assign
            </button>
          </div>
          <div className="button-container">
            <Link to="/" className="detail-button-home">
              Home
            </Link>
          </div>
        </div>
        {showNotification && (
          <div className="assign-success-notification">
            Assign location berhasil ditambahkan.
          </div>
        )}
      </Fragment>
    );
  }
}

const KarakterDetail = (props) => {
  const params = useParams();
  return <KarakterDetailClass params={params} />;
};

export default KarakterDetail;
