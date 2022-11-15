import { Data } from "../data/Data";
import Card from "./Card";

export const cards = Data.map((card) => {
  return (
    <Card
      key={card.id}
      img={card.img}
      id={card.id}
      name={card.name}
      distance={card.distance}
      night={card.night}
      available={card.available}
    />
  );
});

const Place = () => {
  return (
    <div className="container">
      <h1>Inspiration for your next adventure</h1>
      <div className="card">{cards.slice(5, 9)}</div>
      <div className="card">{cards.slice(0, 4)}</div>
    </div>
  );
};

export default Place;
