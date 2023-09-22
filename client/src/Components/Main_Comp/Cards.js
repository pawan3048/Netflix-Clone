import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.image} alt={props.naam} />
        <p>{props.naam}</p>
        <a href={props.movie}>
          <button className="card-btn">Watch Now</button>
        </a>
      </div>
    </>
  );
};

export default Cards;
