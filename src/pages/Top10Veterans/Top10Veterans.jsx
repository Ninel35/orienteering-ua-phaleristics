import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";

import css from "./Top10Veterans.module.css";

const Top10Veterans = () => {
  return (
    <article className={css.article}>
      <h2 className={css.header}>
        Перші досягнення українських майстрів-ветеранів на чемпіонатах світу IOF
        (Veterans World Cup - World Masters Orienteering Championships).
      </h2>
      <figure className={css.left}>
        <img src={img1} alt="" />
        <div>
          Перші медалі Світового Кубку ветеранів IOF (Veterans World Cup) для
          України – бронзові – вибороли 1990 року в Угорщині{" "}
          <b>Елліїда Степаненко та Геннадій Корчевський</b> (WM45).
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          Першу перемогу у Світовому Кубку ветеранів (Veterans World Cup) для
          України виборола 1997 року у США <b>Тетяна Божко</b> (W40). <br />
          <br />
          Першу перемогу у чемпіонаті світу серед ветеранів (World Masters
          Orienteering Championships) для України виборов 2014 року у Бразилії{" "}
          <b>Микола Божко</b> (M65).
        </div>
        <img src={img2} alt="" className={css.right} />
      </figure>
      <h2 className={css.header}>
        TOP-13 українських майстрів-орієнтувальників, складений на підставі
        досягнень на ветеранських чемпіонатах світу IOF.
      </h2>
      <figure className={css.left}>
        <img src={img3} alt="" />
        <div>
          <h3 className={css.name}>
            Микола Божко, Черкаси /{" "}
            <span lang="en">Mykola Bozhko, Cherkasy</span>
          </h3>
          <ul>
            <li>
              1949 дворазовий чемпіон світу серед ветеранів: 2014, Бразилія,
              (long M65); 2019, Латвія, (middle M70);
            </li>
            <li>
              триразовий віце-чемпіон світу серед ветеранів: 2006, Австрія
              (М55); 2015, Швеція (sprint M65); 2018, Данія (long M65);
            </li>
            <li>
              триразовий бронзовий призер чемпіонатів світу серед ветеранів:
              2011, Угорщина (long М60); 2021, Угорщина (sprint M70); 2023,
              Словаччина (long M70).
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Олександр Марчук, Вінниця /{" "}
            <span lang="en">Oleksandr Marchuk, Vinnytsia</span>
          </h3>
          1986
          <ul>
            <li>
              дворазовий чемпіон світу серед ветеранів: 2023, Словаччина (sprint
              + long M35);
            </li>
            <li>
              віце-чемпіон світу серед ветеранів: 2023, Словаччина – middle M35
            </li>
          </ul>
        </div>
        <img src={img4} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img5} alt="" />
        <div>
          <h3 className={css.name}>
            Лілія Пох, Запоріжжя/{" "}
            <span lang="en">Liliia Pokh, Zaporizhzhia</span>
          </h3>
          1934-2021
          <ul>
            <li>чемпіонка світу серед ветеранів 2010, Швейцарія (long W75);</li>
            <li>
              чотириразова віце-чемпіонка світу серед ветеранів: 1995, Росія
              (W60); 2006, Австрія (W70); 2008, Португалія (long W70); 2010,
              Швейцарія (sprint W75);
            </li>
            <li>
              бронзова медалістка чемпіонатів світу серед ветеранів 1999, Данія
              (W65).
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Сергій Бабич, Мукачево-Львів /{" "}
            <span lang="en">Serhiy Babych, Mukachevo-Lviv</span>
          </h3>
          1983
          <ul>
            <li>
              чемпіон світу серед ветеранів 2023, Словаччина (sprint M40);
            </li>
            <li>
              дворазовий віце-чемпіон світу серед ветеранів 2021, Угорщина
              (sprint + long M35);
            </li>
            <li>
              бронзовий призер чемпіонату світу 2021, Угорщина (middle M35).
            </li>
          </ul>
        </div>
        <img src={img6} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img7} alt="" />
        <div>
          <h3 className={css.name}>
            Олена Рудакова, Дніпро /{" "}
            <span lang="en">Olena Rudakova, Dnipro</span>
          </h3>
          1960
          <ul>
            <li>
              чемпіонка світу серед ветеранів 2021, Угорщина (middle W60);;
            </li>
            <li>
              віце-чемпіонка світу серед ветеранів 2023, Словаччина (middle
              W60);
            </li>
            <li>
              бронзова призерка чемпіонату світу серед ветеранів 2021, Угорщина
              (long W60).
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Тетяна Божко, Черкаси /{" "}
            <span lang="en">Tetyana Bozhko, Cherkasy</span>
          </h3>
          1957
          <ul>
            <li>володарка ветеранського Кубку світу 1997, США (W40).</li>
          </ul>
        </div>
        <img src={img8} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img9} alt="" />
        <div>
          <h3 className={css.name}>
            Юрій Омельченко, Чернівці /{" "}
            <span lang="en">Yuri Omeltchenko, Chernivtsi</span>
          </h3>
          1971
          <ul>
            <li>
              дворазовий віце-чемпіон світу серед ветеранів 2012, Німеччина
              (sprint + long M40)
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Марія Семак, Мукачево /{" "}
            <span lang="en">Mariya Semak, Mukachevo</span>
          </h3>
          1985
          <ul>
            <li>
              дворазова віце-чемпіонка світу серед ветеранів 2023, Словаччина
              (sprint + middle W35)
            </li>
          </ul>
        </div>
        <img src={img10} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img11} alt="" />
        <div>
          <h3 className={css.name}>
            Владислав Ласкаржевський, Дніпро /{" "}
            <span lang="en">Vladyslav Laskarzhevsky, Dnipro</span>
          </h3>
          1982
          <ul>
            <li>
              Дворазовий бронзовий призер чемпіонатів світу серед ветеранів:
              2018, Данія (long M35), 2019, Латвія (long M35)
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Олександр Чобан, Чернівці /{" "}
            <span lang="en">Oleksandr Choban, Chernivtsi</span>
          </h3>
          1987
          <ul>
            <li>
              бронзовий призер чемпіонату світу серед ветеранів 2023, Словаччина
              (sprint M35).
            </li>
          </ul>
        </div>
        <img src={img12} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img13} alt="" />
        <div>
          <h3 className={css.name}>
            Еллаїда Степаненко, Київ /{" "}
            <span lang="en">Ellaida Stepanenko, Kyiv</span>
          </h3>
          1941
          <ul>
            <li>
              Бронзова призерка ветеранського Кубку світу 1990, Угорщина (W45)
            </li>
          </ul>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3 className={css.name}>
            Геннадій Корчевський, Харків /{" "}
            <span lang="en">Gennadiy Korchevsky, Kharkiv</span>
          </h3>
          1943-2024
          <ul>
            <li>
              Бронзовий призер ветеранського Кубку світу 1990, Угорщина (М45)
            </li>
          </ul>
        </div>
        <img src={img14} alt="" />
      </figure>
      <figure className={css.left}>
        <img src={img15} alt="" />
        <div>
          <h3 className={css.name}>
            Наталія Шарапова, Харків /{" "}
            <span lang="en">Nataliia Sharapova, Kharkiv</span>
          </h3>
          1973
          <ul>
            <li>
              Бронзова призерка чемпіонату світу серед ветеранів 2023,
              Словаччина (long W50)
            </li>
          </ul>
        </div>
      </figure>
    </article>
  );
};
export default Top10Veterans;
