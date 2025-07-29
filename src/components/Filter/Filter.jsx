import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilterAction } from "../../redux/filterSlice";
import { useState } from "react";
import { setSearchAction } from "../../redux/searchSlice";
import {useParams, useNavigate} from "react-router-dom";

const categories = [
  { id: "ukrainianSummerChampionship", label: "Чемпіонати України літні" },
  { id: "ukrainianWinterChampionship", label: "Чемпіонати України зимові" },
  { id: "dstIVidomstva", label: "Українські чемпіонати ДСТ та відомств" },
  { id: "internationalCompetition", label: "Міжнародні змагання" },
  { id: "touristCompetition", label: "Туристичні змагання" },
  { id: "otherCompetition", label: "Інші види орієнтування" },
  { id: "teamClub", label: "Команда / Клуб" },
  { id: "isf", label: "ISF World School Champs" },
];

const regions = [
  { id: "vinnytska", label: "Вінницька" },
  { id: "volynska", label: "Волинська" },
  { id: "dnipro", label: "Дніпропетровська" },
  { id: "donetska", label: "Донецька" },
  { id: "zhytomyrska", label: "Житомирська" },
  { id: "zakarpatska", label: "Закарпатська" },
  { id: "zaporizska", label: "Запорізька" },
  { id: "ivanofrankivsk", label: "Івано-Франківська" },
  { id: "kyivska", label: "Київська" },
  { id: "kirovogradska", label: "Кіровоградська" },
  { id: "krymska", label: "Кримська" },
  { id: "luganska", label: "Луганська" },
  { id: "lvivska", label: "Львівська" },
  { id: "mykolaivska", label: "Миколаївська" },
  { id: "odeska", label: "Одеська" },
  { id: "poltavska", label: "Полтавська" },
  { id: "rivnenska", label: "Рівненська" },
  { id: "sumska", label: "Сумська" },
  { id: "ternopilska", label: "Тернопільська" },
  { id: "kharkivska", label: "Харківська" },
  { id: "khersonska", label: "Херсонська" },
  { id: "khmelnytska", label: "Хмельницька" },
  { id: "cherkaska", label: "Черкаська" },
  { id: "chernivetska", label: "Чернівецька" },
  { id: "chernigivska", label: "Чернігівська" },
];

const Filter = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const {categoryId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function selectCategory(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;
    const selected = evt.target.dataset.source;

    navigate(selected ? `/category/${selected}`:"/")
    setIsAsideOpen(false);
    dispatch(setSearchAction(""));
    dispatch(setFilterAction(selected));
  }

  return (
    <>
      <button
        className={css.filterBtn}
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        категоріі
      </button>
      {isAsideOpen && (
        <aside className={css.filterMobile}>
          <ul onClick={selectCategory}>
            <li data-source="" className={css.allCategories}>
              Всі категоріі
            </li>
            {categories.map(({ id, label }) => (
              <li
                key={id}
                data-source={id}
                className={`${categoryId === id ? css.selected : ""}`}
              >
                {label}
              </li>
            ))}
          </ul>

          <p className={css.oblast}>Змагання по областях України</p>
          <ul onClick={selectCategory} className={css.regions}>
            {regions.map(({ id, label }) => (
              <li
                key={id}
                data-source={id}
                className={`${categoryId === id ? css.selected : ""}`}
              >
                {label}
              </li>
            ))}
          </ul>
        </aside>
      )}
      <aside className={css.filter}>
        <ul onClick={selectCategory}>
          <li data-source="" className={css.allCategories}>
            Всі категоріі
          </li>
          {categories.map(({ id, label }) => (
            <li
              key={id}
              data-source={id}
              className={`${categoryId === id ? css.selected : ""}`}
            >
              {label}
            </li>
          ))}
        </ul>

        <p className={css.oblast}>Змагання по областях України</p>
        <ul onClick={selectCategory} className={css.regions}>
          {regions.map(({ id, label }) => (
            <li
              key={id}
              data-source={id}
              className={`${categoryId === id ? css.selected : ""}`}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Filter;
