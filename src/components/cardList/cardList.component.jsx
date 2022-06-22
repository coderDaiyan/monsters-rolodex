import Card from "../card/card.component";
import "./cardList.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ name, id, email }) => (
        <Card name={name} id={id} email={email} />
      ))}
    </div>
  );
};

export default CardList;
