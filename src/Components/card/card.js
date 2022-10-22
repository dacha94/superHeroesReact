import "./card.css";
import CardRating from "../card-raiting/CardRaiting";

const AppCard = (props) => {
return (
    <div className="app-card">
        <div className="card-image">
        <img className="hero-image" src={props.image} alt={props.code}></img>
        <h2 className="hero-name">{props.name}</h2>
        </div>
        <CardRating />
        <div className="card-info">
        <div>
            <span>Вселенная: </span>
            {props.universe}
        </div>
        <div>
            <span>Альтер эго: </span>
            {props.alterego}
        </div>
        <div>
            <span>Род деятельности: </span>
            {props.activity}
        </div>
        <div>
            <span>Друзья: </span>
            {props.friends}
        </div>
        <div>
            <span>Суперсилы: </span>
            {props.superpowers}
        </div>
        <div>
            <span>Подробнее: </span>
            {props.moreinfo}
        </div>
        </div>
    </div>
    );
};

export default AppCard;