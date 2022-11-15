import { Stars } from "../assets/icon";

const Card = ({ name, img, period, distance, available }) => {
  return (
    <div className="card">
      <div>
        <img src={img} alt="place" />

        <div className="place_container">
          <small className="name">{name}</small>
          <small className="night">{period}</small>
        </div>
        <div className="distance_container">
          <small className="distance">{distance}</small>
          <small className="available">{available}</small>
        </div>
        <div className="star">
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default Card;
