import React from "react";
import { useNavigate } from "react-router-dom";

const Karakter = (props) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/character/${props.id}`);
  };
  return (
    <div className="karakterPost">
      <div className="nameKarakter">Name : {props.name}</div>
      <div className="statusKarakter">Status : {props.status}</div>
      <div className="speciesKarakter">Species : {props.species}</div>
      <div className="typeKarakter">Type : {props.type}</div>
      <div className="genderKarakter">Gender : {props.gender}</div>
      <div className="episodeKarakter">Episode : {props.episode}</div>
      <div className="originKarakter">Origin : {props.origin}</div>
      <div className="locationKarakter">Location : {props.location}</div>
      <button
        className="detail-button"
        type="button"
        onClick={handleDetailClick}
      >
        Detail
      </button>
    </div>
  );
};

export default Karakter;
