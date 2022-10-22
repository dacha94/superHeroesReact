import "./container.css";
import AppCard from "../card/card.js";
import heros from "../../arr/super.json";

const AppContainer = () => {
  return (
    <div className="app-container">
      {heros.map((hero) => (
        <AppCard
          name={hero.name}
          code={hero.code}
          image={hero.image}
          universe={hero.universe}
          alterego={hero.alterego}
          activity={hero.activity}
          friends={hero.friends}
          superpowers={hero.superpowers}
          moreinfo={hero.moreinfo}
        />
      ))}
    </div>
  );
};

export default AppContainer;