import img1 from "./images/1.jpg";
import img2 from "./images/3.jpg";
import img3 from "./images/4.jpg";
import img4 from "./images/2.jpg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";

import css from "./Top10.module.css";

const Top10 = () => {
  return (
    <article className={css.article}>
      <h2 className={css.header}>
        Перші досягнення українських спортсменів на чемпіонатах світу <br />
        IOF - Міжнародної федерації спортивного орієнтування.
      </h2>
      <figure className={css.left}>
        <img src={img1} alt="" height="300" />
        <div>
          Першу медаль чемпіонату світу IOF (World Orienteering Championships)
          для України – і одразу золоту! – виборов 1995 року в Німеччині{" "}
          <b>Юрій Омельченко</b>.
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          Перші медалі юніорського чемпіонату світу (Junior World Orienteering
          Championships) – срібні – здобули для України 1999 року у Болгарії
          <b>Ірина Купріянова</b>, <b>Вікторія Плохенко</b> та{" "}
          <b>Наталія Потопальська</b> (в естафеті).
        </div>
        <img src={img2} alt="" height="400" className={css.right} />
      </figure>
      <figure className={css.left}>
        <div>
          <img src={img3} alt="" height="300" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
        <div>
          Перші медалі в естафеті «дорослого» чемпіонату світу – бронзові -
          здобули для України 2013 року у Фінляндії <b>Павло Ушкварок</b>,
          <b>Олександр Кратов</b> та <b>Денис Щербаков</b>.
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          Першу серед орієнтувальників медаль Всесвітніх ігор неолімпійських
          видів спорту (World Games IWGA) здобула у 2013 року у Колумбії{" "}
          <b>Надія Волинська</b>.
        </div>
        <div>
          <img src={img4} alt="" height="300" className={css.right} />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
      </figure>
      <h2 className={css.header}>
        TOП-10 - рейтинг складений на підставі досягнень українських спортсменів
        <br />
        на чемпіонатах світу IOF.
      </h2>
      <figure className={css.left}>
        <div>
          <img src={img5} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
        <div>
          <h3>
            Юрій Омельченко, Чернівці /{" "}
            <span lang="en">Yuri Omeltchenko, Chernivtsi</span>
          </h3>
          <ul>
            <li>чемпіон світу 1995, Німеччина (short);</li>
            <li>
              дворазовий віце-чемпіон світу: 2003, Швейцарія (long) та 2004,
              Швеція (sprint);
            </li>
            <li>
              дворазовий віце-чемпіон Європи: 2000, Україна (short) та 2002,
              Угорщина (middle);
            </li>
            <li>бронзовий призер чемпіонату Європи 2002, Угорщина (sprint)</li>
          </ul>
          <p>Клуби: СКА Чернівці, ПІ Луцьк, UKR, OK Orion SWE.</p>
          <p>Результати в л/а: 3000 м - 8:15 (1996), 5000 м – 14.05.</p>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3>
            Надія Волинська, Львів /{" "}
            <span lang="en">Nadiya Volynska, Lviv</span>
          </h3>
          <ul>
            <li>віце-чемпіонка світу 2015, Шотландія (sprint);</li>
            <li>бронзова призерка Всесвітніх Ігор 2013, Колумбія (middle);</li>
            <li>бронзова призерка Кубку світу 2015 та 2016 рр.;</li>
            <li>
              дворазова віце-чемпіонка Європи: 2014, Португалія (middle) та
              2016, Чехія (sprint).
            </li>
          </ul>
          <p>Клуби: ДЮСШ № 9 Львів UKR; OK Orion SWE.</p>
        </div>
        <div>
          <img src={img6} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
      </figure>
      <figure className={css.left}>
        <div>
          <img src={img7} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
        <div>
          <h3>
            Руслан Глібов, Дніпро / <span lang="en">Ruslan Glibov, Dnipro</span>
          </h3>
          <ul>
            <li>віце-чемпіон світу 2018, Латвія (long);</li>
            <li>бронзовий призер чемпіонату світу 2021, Чехія (middle);</li>
            <li>
              бронзовий призер чемпіонату світу серед юніорів, 2006, Литва
              (sprint).
            </li>
          </ul>
          <p>Клуби: СК «Наш Клуб» Дніпро UKR; OK Ravinen SWE.</p>
          <p>Результати в л/а: 3 000 м - 8:38 (2009 р), 10000 м - 29:30.</p>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3>
            Олександр Кратов, Феодосія /{" "}
            <span lang="en">Oleksandr Kratov, Feodosia</span>
          </h3>
          <ul>
            <li>
              триразовий бронзовий призер чемпіонатів світу: 2013, Фінляндія
              (relay), 2014, Італія (middle) та 2017, Естонія (middle).
            </li>
          </ul>
          <p>Клуби: Turun Metsänkävijät FIN, OK Orion SWE</p>
        </div>
        <div>
          <img src={img8} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
      </figure>
      <figure className={css.left}>
        <div>
          <img src={img9} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
        <div>
          <h3>
            Павло Ушкварок, Харків /{" "}
            <span lang="en">Pavlo Ushkvarok, Kharkiv</span>
          </h3>
          <ul>
            <li>бронзовий призер чемпіонату світу 2013, Фінляндія (relay);</li>
            <li>
              бронзовий призер чемпіонату світу серед студентів 2004, Чехія
              (sprint).
            </li>
          </ul>
          <p>Клуби КСО «О-компас» Харків UKR, OK Denseln SWE.</p>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3>
            Денис Щербаков, Олешки /{" "}
            <span lang="en">Denys Sherbakov, Oleshky</span>
          </h3>
          <ul>
            <li>бронзовий призер чемпіонату світу 2013, Фінляндія (relay).</li>
          </ul>
          <p>Клуби: СК «Суворовець» Херсон UKR; OK Rönneby SWE.</p>
        </div>
        <div>
          <img src={img10} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
      </figure>
      <figure className={css.left}>
        <div>
          <img src={img11} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
        <div>
          <h3>
            В’ячеслав Мухідінов, Мукачево /{" "}
            <span lang="en">Vyacheslav Mukhidinov, Mukachevo</span>
          </h3>
          <ul>
            <li>п’яте місце на чемпіонаті світу 2007, Україна (long);</li>
            <li>шосте місце на чемпіонаті світу 2003, Швейцарія (relay).</li>
          </ul>
          <p>
            Клуби: КСО «Товариш» Мукачево UKR; Farum-Tisvilde OK DEN, Turun
            Metsänkävijät FIN, Kristiansand OK NOR, Varegg OK NOR.
          </p>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3>
            Наталія Потопальська, Калуш /{" "}
            <span lang="en">Nataliya Potopalska, Kalush</span>
          </h3>
          <ul>
            <li>віце-чемпіонка світу серед юніорок 1999, Болгарія (relay);</li>
            <li>
              бронзова призерка чемпіонату світу серед юніорок 2000, Чехія
              (long).
            </li>
          </ul>
          <p>Клуби: «Азимут» Калуш;</p>
        </div>
        <div>
          <img src={img12} alt="" />
          <figcaption className={css.imageDescription}>
            Фотографії взяті з сайту WorldofO.com
          </figcaption>
        </div>
      </figure>
      <figure className={css.left}>
        <img src={img13} alt="" />
        <div>
          <h3>
            Ірина Купріянова, Мукачево /{" "}
            <span lang="en">Iryna Kupriyanova, Mukachevo</span>
          </h3>
          <ul>
            <li>1999 – віце-чемпіонка світу серед юніорів, Болгарія.</li>
          </ul>
          <p>Клуби: КСО «Товариш» Мукачево UKR; Farum-Tisvilde OK DEN.</p>
        </div>
      </figure>
      <figure className={css.right}>
        <div>
          <h3>
            Вікторія Плохенко, Херсон /{" "}
            <span lang="en">Viktoria Plokhenko, Kherson</span>
          </h3>
          <ul>
            <li>1999 – віце-чемпіонка світу серед юніорів, Болгарія.</li>
          </ul>
          <p>Клуби: СК «Суворовець» Херсон.</p>
        </div>
        <img src={img14} alt="" />
      </figure>
    </article>
  );
};
export default Top10;
