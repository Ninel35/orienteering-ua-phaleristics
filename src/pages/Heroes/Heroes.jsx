import { heroes } from "./heroes";
import css from "./Heroes.module.css";

const images = import.meta.glob("./images/*", {
  eager: true,
  import: "default",
});

const Heroes = () => {
  return (
    <article className={css.article}>
      <h2 className={css.header}>
        Пам&#39;яті Героїв
      </h2>
      <p className={css.intro}>
Неспровокована російська агресія проти України, що розпочалася у 2014 році, забрала життя багатьох українських орієнтувальників. Серед захисників України були спортсмени, тренери та діячі спортивного орієнтування, які віддали найдорожче — своє життя — за свободу і незалежність Батьківщини. Ми назавжди збережемо пам'ять про їхню мужність і подвиг. Вічна пам'ять Героям України.</p>

      {heroes.map((hero, index) => {
        const image = images[`./images/${hero.image}`];

        return (
          <figure
            key={hero.id}
            className={index % 2 === 0 ? css.left : css.right}
          >
            <div className={css.imageBox}>
              <img src={image} alt={hero.name} />
            </div>

            <div className={css.content}>
              <h3 className={css.name}>{hero.name}</h3>

              <p className={css.dates}>{hero.dates}</p>

              {hero.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </figure>
        );
      })}
    </article>
  );
};

export default Heroes;