import { veteransData } from "./veteransData";
import css from "./Top10Veterans.module.css";

const images = import.meta.glob("./images/*", {
  eager: true,
  import: "default",
});

const Top10Veterans = () => {
  // Rozdzielamy dane na pierwszą część (osiągnięcia) i drugą (lista TOP)
  const achievements = veteransData.filter((item) => item.category === "achievement");
  const topList = veteransData.filter((item) => item.category !== "achievement");

  const renderName = (nameString) => {
    const parts = nameString.split(" / ");
    if (parts.length < 2) return nameString;

    return (
      <>
        {parts[0]} / <span lang="en">{parts[1]}</span>
      </>
    );
  };

  return (
    <article className={css.article}>
      <h2 className={css.header}>
        Перші досягнення українських майстрів-ветеранів на чемпіонатах світу IOF
        (Veterans World Cup - World Masters Orienteering Championships).
      </h2>

      {achievements.map((item, index) => {
        const image = images[`./images/${item.image}`];
        const isLeft = index % 2 === 0;

        return (
          <figure
            key={item.id}
            className={isLeft ? css.left : css.right}
          >
            {isLeft && <img src={image} alt="" />}
            <div>
              {item.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {!isLeft && <img src={image} alt="" className={css.right} />}
          </figure>
        );
      })}

      <h2 className={css.header}>
        TOP українських майстрів-орієнтувальників, складений на підставі
        досягнень на ветеранських чемпіонатах світу IOF:
      </h2>

      {topList.map((hero, index) => {
        const image = images[`./images/${hero.image}`];
        const isLeft = index % 2 === 0;

        return (
          <figure
            key={hero.id}
            className={isLeft ? css.left : css.right}
          >
            {isLeft && <img src={image} alt="" />}
            <div>
              <h3 className={css.name}>{renderName(hero.name)}</h3>
              {hero.year}
              <ul>
                {hero.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
            {!isLeft && <img src={image} alt="" />}
          </figure>
        );
      })}

      {images["./images/16.jpg"] && (
        <img
          src={images["./images/16.jpg"]}
          alt=""
          className={css.group}
        />
      )}
    </article>
  );
};

export default Top10Veterans;