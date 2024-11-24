interface IHeroCardProps {
  isDark: boolean;
  name: string;
  image: string;
  age: number;
  weapons: string[];
}


function HeroCard({ isDark, name, image, age, weapons }: IHeroCardProps) {
  return (
    <article className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>
        Age: {age} years
      </p>
      <img src={image} alt="" />
      <p>
        Weapons:
      </p>
      {weapons.map((weapon, index) => (
        <span className="weapon" key={index}>
          {weapon}
          {index < weapons.length - 1 && " | "}
        </span>
      ))}
    </article>
  );
}

export default HeroCard;
