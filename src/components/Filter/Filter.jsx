import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilterAction } from "../../redux/filterSlice";
import { useState } from "react";
import { setSearchAction } from "../../redux/searchSlice";

const Filter = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const dispatch = useDispatch();

  function selectCategory(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;
    setIsAsideOpen(false);
    dispatch(setSearchAction(""));
    dispatch(setFilterAction(evt.target.dataset.source));
  }

  return (
    <>
      <button
        className={css.filterBtn}
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        filter
      </button>
      {isAsideOpen && (
        <aside className={css.filterMobile}>
          <ul onClick={selectCategory}>
            <li data-source="" className={css.allCategories}>
              All Categories
            </li>
            <li data-source="ukrainianSummerChampionship">
              Чемпіонати України літні
            </li>
            <li data-source="ukrainianWinterChampionship">
              Чемпіонати України зимові
            </li>
            <li data-source="dstIVidomstva">
              Українські чемпіонати ДСТ та відомств
            </li>
            <li data-source="internationalCompetition">Міжнародні змагання</li>
            <li data-source="touristCompetition">Туристичні змагання</li>
            <li data-source="otherCompetition">Інші змагання</li>
            <li data-source="teamClub">Команда / Клуб</li>
          </ul>

          <p className={css.oblast}>Змагання по областях України</p>
          <ul onClick={selectCategory} className={css.regions}>
            <li data-source="vinnytska">Вінницька</li>
            <li data-source="volynska">Волинська</li>
            <li data-source="dnipro">Дніпропетровська</li>
            <li data-source="donetska">Донецька</li>
            <li data-source="zhytomyrska">Житомирська</li>
            <li data-source="zakarpatska">Закарпатська</li>
            <li data-source="zaporizska">Запорізька</li>
            <li data-source="ivanofrankivsk">Івано-Франківська</li>
            <li data-source="kyivska">Київська</li>
            <li data-source="kirovogradska">Кіровоградська</li>
            <li data-source="krymska">Кримська</li>
            <li data-source="luganska">Луганська</li>
            <li data-source="lvivska">Львівська</li>
            <li data-source="mykolaivska">Миколаївська</li>
            <li data-source="odeska">Одеська</li>
            <li data-source="poltavska">Полтавська</li>
            <li data-source="rivnenska">Рівненська</li>
            <li data-source="sumska">Сумська</li>
            <li data-source="ternopilska">Тернопільська</li>
            <li data-source="kharkivska">Харківська</li>
            <li data-source="khersonska">Херсонська</li>
            <li data-source="khmelnytska">Хмельницька</li>
            <li data-source="cherkaska">Черкаська</li>
            <li data-source="chernivetska">Чернівецька</li>
            <li data-source="chernigivska">Чернігівська</li>
          </ul>
        </aside>
      )}
      <aside className={css.filter}>
        <ul onClick={selectCategory}>
          <li data-source="" className={css.allCategories}>
            Всі категоріі
          </li>
          <li data-source="ukrainianSummerChampionship">
            Чемпіонати України літні
          </li>
          <li data-source="ukrainianWinterChampionship">
            Чемпіонати України зимові
          </li>
          <li data-source="dstIVidomstva">
            Українські чемпіонати ДСТ та відомств
          </li>
          <li data-source="internationalCompetition">Міжнародні змагання</li>
          <li data-source="touristCompetition">Туристичні змагання</li>
          <li data-source="otherCompetition">Інші змагання</li>
          <li data-source="teamClub">Команда / Клуб</li>
        </ul>

        <p className={css.oblast}>Змагання по областях України</p>
        <ul onClick={selectCategory} className={css.regions}>
          <li data-source="vinnytska">Вінницька</li>
          <li data-source="volynska">Волинська</li>
          <li data-source="dnipro">Дніпропетровська</li>
          <li data-source="donetska">Донецька</li>
          <li data-source="zhytomyrska">Житомирська</li>
          <li data-source="zakarpatska">Закарпатська</li>
          <li data-source="zaporizska">Запорізька</li>
          <li data-source="ivanofrankivsk">Івано-Франківська</li>
          <li data-source="kyivska">Київська</li>
          <li data-source="kirovogradska">Кіровоградська</li>
          <li data-source="krymska">Кримська</li>
          <li data-source="luganska">Луганська</li>
          <li data-source="lvivska">Львівська</li>
          <li data-source="mykolaivska">Миколаївська</li>
          <li data-source="odeska">Одеська</li>
          <li data-source="poltavska">Полтавська</li>
          <li data-source="rivnenska">Рівненська</li>
          <li data-source="sumska">Сумська</li>
          <li data-source="ternopilska">Тернопільська</li>
          <li data-source="kharkivska">Харківська</li>
          <li data-source="khersonska">Херсонська</li>
          <li data-source="khmelnytska">Хмельницька</li>
          <li data-source="cherkaska">Черкаська</li>
          <li data-source="chernivetska">Чернівецька</li>
          <li data-source="chernigivska">Чернігівська</li>
        </ul>
      </aside>
    </>
  );
};

export default Filter;
